"use client";

import { createClient } from "@/utils/supabase/client";
import "easymde/dist/easymde.min.css";
import { CameraIcon } from "lucide-react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const CreateBlogPost = () => {
  const supabase = createClient();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const onChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  const create = async () => {
    if (!title.trim()) {
      toast.error("Title is required", { position: "top-center" });
      return;
    }
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .insert([{ title, image, content }])
        .select();

      if (error) {
        toast.error("Something went wrong. Try again", {
          position: "top-center",
        });
      }
      if (data) {
        toast.success("Blog post created!", { position: "top-center" });
        router.push("/blog");
        router.refresh();
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      <section>
        <label className='text-sm'>Title</label>
        <Input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full'
          placeholder='Enter blog title'
        />
      </section>

      <div>
        {image && (
          <div className='relative rounded-md overflow-hidden w-full max-w-xs mx-auto aspect-square border'>
            <CldImage
              alt='uploaded image'
              src={image}
              fill
              crop='fit'
              format='webp'
              sizes='50vw'
              loading='lazy'
            />
          </div>
        )}
        <div className='mt-3 flex flex-col justify-center items-center'>
          <CldUploadWidget
            uploadPreset='dtfblogimages'
            onSuccess={(results, { widget }) => {
              if (typeof results.info === "object") {
                setImage(results.info?.public_id);
                widget.close();
              }
            }}>
            {({ open }) => (
              <button
                onClick={() => open()}
                className='border flex items-center justify-center gap-3 rounded-lg px-5 py-1.5 shadow-md'>
                <CameraIcon />
                {image ? "Change Image" : "Attach Image"}
              </button>
            )}
          </CldUploadWidget>
        </div>
      </div>

      <SimpleMDE
        value={content}
        onChange={onChange}
        placeholder='Enter blog content here'
      />

      <Button onClick={create} disabled={loading} className='w-full'>
        {loading ? "CREATING..." : "CREATE POST"}
      </Button>
    </div>
  );
};

export default CreateBlogPost;
