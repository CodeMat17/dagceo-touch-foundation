import { Flower2, Leaf } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
  return (
    <div className='w-full py-20 bg-gray-100 flex flex-col  items-center justify-center'>
      <h2 className='md:hidden text-3xl md:text-4xl font-semibold'>
        Who we are
      </h2>
      <div className=' max-w-6xl mt-8 px-4 flex flex-col md:flex-row  items-center justify-center gap-6 md:gap-12'>
        <Image
          alt=''
          src='/pht1.jpg'
          priority
          width={300}
          height={300}
          className='w-full max-w-[500px] rounded-md'
        />
        <div className='space-y-4'>
          <h2 className='hidden md:block text-3xl md:text-4xl font-semibold'>
            Who we are
          </h2>
          <p className='font-semibold text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            illum?
          </p>
          <p className='md:max-w-5xl text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            illo porro facilis, similique incidunt velit nisi. Sed dolore iure
            omnis ad reprehenderit, quis saepe, perspiciatis vero laudantium,
            possimus repellat temporibus!
          </p>
          <Button>Learn more</Button>
        </div>
      </div>
   
    </div>
  );
};

export default WhoWeAre;
