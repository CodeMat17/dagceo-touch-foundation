import EditContact from "@/components/EditContact";
import TitleModel from "@/components/TitleModel";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
      <div className='mt-12 w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-4'>
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
            <p className='font-light'>{data.officehours}</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>Phone no.</p>
            <p className='font-light'>{data.phone}</p>
          </div>
        </div>
        <div className='w-full max-w-xl lg:max-w-md xl:max-w-xl mx-auto'>
          <div className='relative flex flex-col items-center'>
            <Image
              alt='sent email svg'
              priority
              width={400}
              height={400}
              src='/mail-sent-animate.svg'
            />
            <Button
              asChild
              className='absolute bottom-[60px] bg-green-500/40 text-green-800 dark:text-white hover:bg-green-500/30'>
              <Link href='mailto:info@dagceotouchfoundation.org'>
                Send email to us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
