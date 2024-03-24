import { createClient } from "@/utils/supabase/server";
import { Footprints, PlugZap, ScanEyeIcon } from "lucide-react";
import Link from "next/link";
import TitleModel from "./TitleModel";
import { Button } from "./ui/button";

const Statements = async () => {
  const supabase = createClient();

  const { data: mission } = await supabase
    .from("ourmission")
    .select("*")
    .single();

  const { data: values } = await supabase
    .from("ourvalues")
    .select("*")
    .single();

  const { data: impact } = await supabase
    .from("ourimpact")
    .select("*")
    .single();

  console.log("Mid: ", mission.id);

  const statements = [
    {
      id: mission.id,
      title: "Our Mission",
      content: mission.content,
      tag: 1,
    },
    {
      id: values.id,
      title: "Our Values",
      content: values.content,
      tag: 2,
    },
    {
      id: impact.id,
      title: "Our Impact",
      content: impact.content,
      tag: 3,
    },
  ];

  return (
    <div className='px-4 w-full flex flex-col items-center py-20 max-w-6xl mx-auto'>
      <TitleModel text='Our Statements' />
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 md:gap-2 xl:gap-16'>
        {statements.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center gap-3 justify-center'>
            <div className='w-16 h-16 bg-gradient-to-tr from-blue-500 to-green-400 flex items-center justify-center animate-pulse rounded-full'>
              {item.tag === 1 && <Footprints className='w-8 h-8 text-white' />}
              {item.tag === 2 && <ScanEyeIcon className='w-8 h-8 text-white' />}
              {item.tag === 3 && <PlugZap className='w-8 h-8 text-white' />}
            </div>
            <h2 className='font-semibold text-lg tracking-wider whitespace-nowrap'>
              {item.title}
            </h2>
            <p className='text-center line-clamp-4'>{item.content}</p>
          </div>
        ))}
      </div>
      <div className='mt-6 flex justify-center'>
        <Button asChild variant='outline' className='shadow-md'>
          <Link href='/about-us'>Read more...</Link>
        </Button>
      </div>
    </div>
  );
};

export default Statements;
