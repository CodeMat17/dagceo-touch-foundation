import TitleModel from "@/components/TitleModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <div className='w-full min-h-screen px-5 py-20'>
      <TitleModel text='Contact Us' />
      <div className='mt-12 w-full max-w-xl mx-auto'>
        <div className='space-y-4 text-center'>
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
            <p className='text-lg font-semibold text-gray-500'>
              Branch Office Hours
            </p>
            <p className='font-light'>Mondays - Fridays, 9:00 am to 5:00 pm</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>
              Branch Phone no.
            </p>
            <p className='font-light'>23480 444 4444</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-500'>
              You want to send a mail? Fill the boxes below:
            </p>
            <div className='mt-3 space-y-3'>
              <Input placeholder='Enter your email address' />
              <Input placeholder='Enter your phone number' />
              <Input placeholder='Enter message title' />
              <Textarea placeholder='Enter message' />
              <Button className="w-full">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
