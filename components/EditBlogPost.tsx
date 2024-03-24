"use client";

import { createClient } from "@/utils/supabase/client";
import "easymde/dist/easymde.min.css";
import { CameraIcon, X } from "lucide-react";
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

const EditBlogPost = ({ id, postContent, postImage, postTitle }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const [title, setTitle] = useState(postTitle);
  const [image, setImage] = useState(postImage);
  const [content, setContent] = useState<string | undefined>(postContent);
  const [loading, setLoading] = useState(false);

  const onChange = useCallback((content: string) => {
    setContent(content);
  }, []);

  const update = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .update({ title, image, content })
        .eq("id", id)
        .select();

      if (error) {
        toast.error("Something went wrong. Try again", {
          position: "top-center",
        });
      }
      if (data) {
        router.refresh();
        toast.success("updated successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error Msg: ", error);
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
        />
      </section>

      <div>
        {image && (
          <div className='relative rounded-md overflow-hidden w-full max-w-xs mx-auto aspect-square border'>
            <CldImage
              alt='uploaded image'
              src={image}
              // width='200'
              // height='200'
              fill
              crop='fit'
              // gravity='faces'
              format='webp'
              sizes='50vw'
              loading='lazy'
            />
            <Button
              // onClick={clearImage}
              variant='outline'
              size='icon'
              className='absolute top-0 right-0 text-red-600 border-red-600 rounded-full bg-inherit'>
              <X />
            </Button>
          </div>
        )}

        <div className='mt-3 flex flex-col justify-center items-center'>
          <CldUploadWidget
            uploadPreset='dtfblogimages'
            onSuccess={(results, { widget }) => {
              if (typeof results.info === "object") {
                console.log("Public ID: ", results.info?.public_id);
                setImage(results.info?.public_id);
                widget.close();
              }
            }}>
            {({ open }) => {
              return (
                <button
                  onClick={() => open()}
                  className='border flex items-center justify-center gap-3 rounded-lg px-5 py-1.5 shadow-md'>
                  <CameraIcon />
                  {image ? "Change Image" : "Attach Image"}
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
      </div>

      <SimpleMDE
        value={content}
        onChange={onChange}
        // options={autofocusNoSpellcheckerOptions}
        placeholder='Enter blog content here'
      />
      <Button onClick={update} disabled={loading} className='w-full'>
        {loading ? "UPDATING..." : "UPDATE"}
      </Button>
    </div>
  );
};

export default EditBlogPost;
