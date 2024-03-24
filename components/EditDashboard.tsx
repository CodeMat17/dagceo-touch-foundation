"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const EditDashboard = ({ id, text, from, btnText }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const [content, setContent] = useState<string | undefined>(text);
  const [loading, setLoading] = useState(false);

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
          position: "bottom-right",
        });
      }

      if (data) {
        toast.success("Vision updated successfully", {
          position: "bottom-right",
        });
        router.refresh();
      }
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full grid gap-3'>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Type your message here.'
        className='min-h-[220px] sm:min-h-[200px] md:min-h-[150px]'
      />
      <Button onClick={update} disabled={loading}>
        {loading ? "Updating..." : btnText}
      </Button>
    </div>
  );
};

export default EditDashboard;
