import EditContact from "@/components/EditContact";
import TitleModel from "@/components/TitleModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTF | Contact Us",
};

const ContactUs = async () => {
  const supabase = createClient();
  const { userId } = auth();

  const { data } = await supabase.from("contactus").select("*").single();

  if (userId) {
    return (
      <EditContact
        id={data.id}
        head={data.headoffice}
        branch={data.branchoffice}
        hours={data.officehours}
        tel={data.phone}
        mail={data.email}
      />
    );
  }

  return (
    <div className='w-full min-h-screen px-5 py-20'>
      <TitleModel text='Contact Us' />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className='mt-12 lg:mt-24 w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-4'>
        <div className='space-y-4 text-center max-w-xl mx-auto'>
          <div>
            <p className='text-lg font-semibold text-gray-500'>
              Head Office Address
            </p>
            <p className='font-light'>{data.headoffice}</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>
              Branch Office Address
            </p>
            <p className='font-light'>{data.branchoffice}</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>Office Hours</p>
            <p className='font-light'>
              {data.officedays}, {data.time}
            </p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>Phone no.</p>
            <p className='font-light'>{data.time}</p>
          </div>
        </div>
        <div className='w-full max-w-xl lg:max-w-md xl:max-w-xl mx-auto'>
          <p className='text-lg font-semibold text-center text-gray-500'>
            Feedback Form
          </p>
          <div className='mt-3 space-y-3'>
            <Input placeholder='Enter your email address' />
            <Input placeholder='Enter your phone number' />
            <Input placeholder='Enter message title' />
            <Textarea placeholder='Enter message' />
            <Button className='w-full'>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
