"use client";

import { createClient } from "@/utils/supabase/client";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import TitleModel from "./TitleModel";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const EditFooterNote = ({ id, txt }: { id: number; txt: string }) => {
  const supabase = createClient();
  const router = useRouter();

  const [footerNote, setFooterNote] = useState(txt);

  const [loading, setLoading] = useState(false);

  const update = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("footernote")
        .update({ text: footerNote })
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
    <div className='w-full min-h-screen  max-w-xl mx-auto px-5'>
      <div className='flex items-center justify-center gap-6'>
        <TitleModel text='Edit Footer Note' />
        <UserButton afterSignOutUrl='/' />
      </div>

      {/* <pre>{JSON.stringify(footernote, null, 2)}</pre> */}

      <div className='mt-12 lg:mt-24 space-y-4'>
        <div>
          <Textarea
            value={footerNote}
            onChange={(e) => setFooterNote(e.target.value)}
            className='w-full mt-1'
          />
        </div>

        <div className='pt-3'>
          <Button onClick={update} className='w-full' disabled={loading}>
            {loading ? "UPDATING..." : "UPDATE"}
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EditFooterNote;
