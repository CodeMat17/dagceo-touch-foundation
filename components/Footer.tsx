import { supabaseclient } from "@/lib/supabaseclient";
import {
  Clock9Icon,
  Facebook,
  Instagram,
  Linkedin,
  MailCheck,
  MapPinIcon,
  PhoneCallIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import LogoComponent from "./LogoComponent";
import { Button } from "./ui/button";

export const revalidate = 0;

const Footer = async () => {
  let { data: blogs, error } = await supabaseclient
    .from("blogs")
    .select("id, title")
    .order("created_at", { ascending: false })
    .range(0, 3);

  return (
    <div className='px-4 py-8 bg-slate-900 text-gray-200'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
        <div className='space-y-3'>
          <div className='flex flex-col'>
            <LogoComponent classnames='w-[84px] h-[84px]' />
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
            <Button className='bg-slate-700 hover:bg-slate-800 text-white px-12'>
              Donate
            </Button>
          </div>
        </div>

        <div className=' sm:mt-[85px] flex flex-col '>
          <p className='text-lg font-semibold'>Recent Blog Post (4)</p>
          <div className='flex flex-col gap-1 mt-4 text-gray-400 max-w-xs'>
            {blogs && blogs.length < 1
              ? "No blog post yet"
              : blogs?.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    className='font-light text-sm hover:underline hover:text-blue-600 truncate'>
                    {blog.title}
                  </Link>
                ))}
          </div>
          <div className='mt-8'>
            <Button
              asChild
              className='bg-slate-700 hover:bg-slate-800 text-white px-12'>
              <Link href='/sign-in'>Admin</Link>
            </Button>
          </div>
        </div>

        <div className=' md:mt-[85px]'>
          <p className='text-lg font-semibold'>Contact Info</p>
          <div className='mt-4 text-sm space-y-3 text-gray-400'>
            <div className='flex items-center gap-3'>
              <MapPinIcon className='w-5 h-5' />
              Head Office: No. 91 Upu road, Otukpo, Benue State.
            </div>
            <div className='flex items-center gap-3'>
              <MapPinIcon className='w-5 h-5' />
              Branch Office: Suit No. S/... Apo Park, Apo Resettlement, Abuja.
            </div>
            <div className='flex items-center gap-3'>
              <PhoneCallIcon className='w-5 h-5' />
              23480 444 4444
            </div>
            <div className='flex items-center gap-3'>
              <MailCheck className='w-5 h-5' />
              email@dagceotouchfoundation.org
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
