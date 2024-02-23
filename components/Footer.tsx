import {
  Clock9Icon,
  Facebook,
  Instagram,
  Linkedin,
  MailCheck,
  MapPinIcon,
  PhoneCallIcon,
  Recycle,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className='px-4 py-20 bg-slate-900 text-gray-200'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-0'>
        <div className='space-y-3'>
          <div className='flex flex-col gap-'>
            <Recycle className='w-12 h-12' />
            <p className='font-semibold text-xl'>Dagceo Touch Foundation</p>
          </div>

          <p className='text-gray-400 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum
            debitis molestiae eaque. Ea, facilis. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolor iusto optio laudantium?
          </p>
          <div className='flex items-center gap-6 pt-2 text-gray-400'>
            <Facebook className='w-[20px] h-[20px]' />
            <X className='w-[20px] h-[20px]' />
            <Instagram className='w-[20px] h-[20px]' />
            <Linkedin className='w-[20px] h-[20px]' />
          </div>

          <div className='pt-3'>
            <Button className='bg-slate-700 px-12'>Donate</Button>
          </div>
        </div>


        <div className=' sm:mt-12 flex flex-col sm:items-center'>
          <p className='text-lg font-semibold'>Recent Blog Post (4)</p>
          <div className='flex flex-col gap-1 mt-4 text-gray-400'>
            <Link
              href='#'
              className='font-light text-sm hover:underline hover:text-blue-600'>
              Post 1 Lorem ipsum dolor sit.
            </Link>
            <Link
              href='#'
              className='font-light text-sm hover:underline hover:text-blue-600'>
              Post 2 Lorem ipsum dolor sit.
            </Link>
            <Link
              href='#'
              className='font-light text-sm hover:underline hover:text-blue-600'>
              Post 3 Lorem ipsum dolor sit.
            </Link>
            <Link
              href='#'
              className='font-light text-sm hover:underline hover:text-blue-600'>
              Post 4 Lorem ipsum dolor sit.
            </Link>
          </div>
        </div>

        <div className=' md:mt-12'>
          <p className='text-lg font-semibold'>Contact Info</p>
          <div className='mt-4 text-sm space-y-3 text-gray-400'>
            <div className='flex items-center gap-3'>
              <MapPinIcon className='w-5 h-5' />
              Plot 223 Lorem ipsum dolor sit amet. FCT, Abuja.
            </div>
            <div className='flex items-center gap-3'>
              <PhoneCallIcon className='w-5 h-5' />
              23480 444 4444
            </div>
            <div className='flex items-center gap-3'>
              <MailCheck className='w-5 h-5' />
              emailus@dagceotouchfoundation.org
            </div>
            <div className='flex items-center gap-3'>
              <Clock9Icon className='w-5 h-5' />
              Mondays - Fridays, 9:00 am to 5:00 pm{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
