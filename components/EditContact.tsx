"use client";

import { createClient } from "@/utils/supabase/client";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import TitleModel from "./TitleModel";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const EditContact = ({ id, head, branch, hours, tel, mail }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const [headoffice, setHeadOffice] = useState(head);
  const [branchoffice, setBranchOffice] = useState(branch);
  const [officehours, setOfficeHours] = useState(hours);
  const [phone, setPhone] = useState(tel);
  const [email, setEmail] = useState(mail);
  const [loading, setLoading] = useState(false);

  const update = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("contactus")
        .update({ headoffice, branchoffice, phone, officehours, email })
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
    <div className='w-full  max-w-xl mx-auto px-5 p-20'>
      <div className='flex items-center justify-center gap-6'>
        <TitleModel text='Edit Contact Info' />
        <UserButton afterSignOutUrl='/' />
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div className='mt-12 lg:mt-24 space-y-4'>
        <div>
          <label>Head Office:</label>
          <Input
            value={headoffice}
            onChange={(e) => setHeadOffice(e.target.value)}
            className='w-full mt-1'
          />
        </div>
        <div>
          <label>Branch Office:</label>
          <Input
            value={branchoffice}
            onChange={(e) => setBranchOffice(e.target.value)}
            className='w-full mt-1'
          />
        </div>
        <div>
          <label>Office Hours:</label>
          <Input
            value={officehours}
            onChange={(e) => setOfficeHours(e.target.value)}
            className='w-full mt-1'
          />
        </div>
        <div>
          <label>Tel:</label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='w-full mt-1'
          />
        </div>
        <div>
          <label>Email:</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default EditContact;
