"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

const AddSponsorForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any | null>(null);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const addSponsor = async () => {
    setErrorMsg(null);

    if (name === "") {
      setErrorMsg("Name field cannot be empty.");
      return;
    }
    if (name.length < 3) {
      setErrorMsg("Name cannot be this short.");
      return;
    }
    if (!email.match(emailRegex)) {
        setErrorMsg("Enter a valid email");
        return
      } 
       if (phone === "") {
         setErrorMsg("Enter your phone number");
         return;
       }
       if (phone.length < 10) {
         setErrorMsg("Incorrect phone number");
         return;
      }
        if (location === "") {
          setErrorMsg("Enter your location");
          return;
      }
       


    // const { data, error } = await supabaseclient
    //   .from("sponsors")
    //   .insert([{ name, email, phone, location, remark }])
    //   .select();
  };

  return (
    <div className='space-y-3'>
      {errorMsg && (
        <div className='flex items-center justify-center text-center p-4 text-red-600 bg-red-50 rounded-lg'>
          {errorMsg}
        </div>
      )}
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter full name'
        className=''
      />
      <Input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter emaill address'
      />
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Enter phone number'
      />
      <Input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Enter location'
      />
      <Textarea
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        placeholder='Enter remark'
      />
      <Button onClick={addSponsor} className='w-full'>
        {loading ? <Loader2Icon className='animate-spin' /> : "SUBMIT"}
      </Button>
    </div>
  );
};

export default AddSponsorForm;
