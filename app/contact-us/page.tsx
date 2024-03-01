import TitleModel from "@/components/TitleModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <div className='w-full min-h-screen px-5 py-20'>
      <TitleModel text='Contact Us' />
      <div className='mt-12 lg:mt-24 w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-4'>
        <div className='space-y-4 text-center max-w-xl mx-auto'>
          <div>
            <p className='text-lg font-semibold text-gray-500'>
              Head Office Address
            </p>
            <p className='font-light'>No. 91 Upu road, Otukpo, Benue State</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>
              Branch Office Address
            </p>
            <p className='font-light'>
              Suit No. S/... Apo Park, Apo Resettlement, Abuja.
            </p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>Office Hours</p>
            <p className='font-light'>Mondays - Fridays, 9:00 am to 5:00 pm</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>Phone no.</p>
            <p className='font-light'>23480 444 4444</p>
          </div>
        </div>
        <div className='w-full max-w-xl lg:max-w-md xl:max-w-xl mx-auto'>
          <p className='text-lg font-semibold text-center text-gray-500'>
            You want to send a mail?
          </p>
          <p className='text-lg font-semibold text-center text-gray-500'>
            Fill the boxes below:
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
