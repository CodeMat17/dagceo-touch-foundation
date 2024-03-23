"use client";

import { createClient } from "@/utils/supabase/client";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const EditSimpleMDE = ({ id, item, from }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const [content, setContent] = useState<string | undefined>(item);
  const [loading, setLoading] = useState(false);

  const onChange = useCallback((content: string) => {
    setContent(content);
  }, []);

  const update = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from(from)
        .update({ content })
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
    <div>
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

export default EditSimpleMDE;
