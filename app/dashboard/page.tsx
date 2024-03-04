"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabaseclient } from "@/lib/supabaseclient";
import "easymde/dist/easymde.min.css";
import { CameraIcon, Loader2, X } from "lucide-react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

{
  /* <SimpleMDE />; */
}



const Dashboard = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const [titleReq, setTitleReq] = useState(false);
  const [contentReq, setContentReq] = useState(false);

  const clearImage = () => {
    setImage("");
  };

  const onChange = useCallback((content: string) => {
    setContent(content);
  }, []);


  // Handle the submit of the post form
  const handleSubmit = async () => {
    try {
      setTitleReq(false);
      setContentReq(false);

      if (!title) {
        setTitleReq(true);
        return;
      }

      if (!content) {
        setContentReq(true);
        return;
      }

      if (title || content) {
        setLoading(true);

        const { data, error } = await supabaseclient
          .from("blogs")
          .insert([{ image, title, content }]);

        if (error) {
          console.error(error);
        } else {
          console.log("db-data: ", data);
        }
      }
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
      router.push("/blog");
      setLoading(false);
    }
  };

  return (
    <div className='px-4 py-20 w-full min-h-screen max-w-2xl mx-auto'>
      <p className='font-semibold text-xl text-center'>Create a Blog Post</p>

      <div className='mt-12 space-y-4'>
        {image ? (
          <div className='relative rounded-md overflow-hidden max-w-xs mx-auto'>
            <CldImage
              alt='uploaded image'
              src={image}
              width='400'
              height='200'
              crop='fit'
              // gravity='faces'
              format='webp'
              sizes='50vw'
              loading='lazy'
            />
            <Button
              onClick={clearImage}
              variant='outline'
              size='icon'
              className='absolute top-0 right-0 text-red-600 border-red-600 rounded-full bg-inherit'>
              <X />
            </Button>
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center'>
            <p className='text-gray-500 mb-2'>Upload Image (optional)</p>

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
                    Attach Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        )}

        <div className='space-y-4'>
          <div className='space-y-1.5'>
            <label className='text-gray-500'>
              Enter post title{" "}
              {titleReq && (
                <span className='text-sm text-red-600 pl-1'>
                  (title is required!)
                </span>
              )}
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Required'
            />
          </div>

          <div className='space-y-1.5'>
            <label className='text-gray-500'>
              Enter post content{" "}
              {contentReq && (
                <span className='text-sm text-red-600 pl-1'>
                  (content is required!)
                </span>
              )}
            </label>
            <SimpleMDE
              value={content}
              onChange={onChange}
              // options={autofocusNoSpellcheckerOptions}
              placeholder='Enter blog content here'
            />
          </div>

          <div className='pt-3 flex justify-end'>
            <Button onClick={handleSubmit} className='px-12'>
              {loading ? (
                <>
                  <Loader2 className='animate-spin mr-3' /> <p>Posting...</p>
                </>
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
