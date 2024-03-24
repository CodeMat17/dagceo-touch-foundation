"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const EditHeroText = ({ id, text1, text2, text3, text4 }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const [text_1, setText1] = useState(text1);
  const [text_2, setText2] = useState(text2);
  const [text_3, setText3] = useState(text3);
  const [text_4, setText4] = useState(text4);
  const [loading, setLoading] = useState(false);

  const update = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("herotext")
        .update({ text_1, text_2, text_3, text_4 })
        .eq("id", id)
        .select();

      if (error) {
        toast.error("Something went wrong. Try again.", {
          position: "top-right",
        });
      }

      if (data) {
        router.refresh();
        toast.success("Successfully updated!.", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col gap-3'>
      <div>
        <label>Text 1</label>
        <Input value={text_1} onChange={(e) => setText1(e.target.value)} />
      </div>
      <div>
        <label>Text 2</label>
        <Input value={text_2} onChange={(e) => setText2(e.target.value)} />
      </div>
      <div>
        <label>Text 3</label>
        <Input value={text_3} onChange={(e) => setText3(e.target.value)} />
      </div>
      <div>
        <label>Text 4</label>
        <Input value={text_4} onChange={(e) => setText4(e.target.value)} />
      </div>
      <div className='pt-3'>
        <Button onClick={update} disabled={loading} className='w-full'>
          {loading ? "Updating..." : "Update text animation"}
        </Button>
      </div>
    </div>
  );
};

export default EditHeroText;
