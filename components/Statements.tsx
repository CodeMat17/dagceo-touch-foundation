import {
  Footprints,
  PlugZap,
  ScanEyeIcon
} from "lucide-react";
import Link from "next/link";
import TitleModel from "./TitleModel";
import { Button } from "./ui/button";

const statements = [
  {
    id: 1,
    title: "Vison",
    content:
      "To cultivate a compassionate and equitable society worldwide, ensuring that vulnerable individuals have equal access to opportunities, healthcare, and environmental sustainability.",
  },
  {
    id: 2,
    title: "Mission",
    content:
      "To create and advance opportunities for vulnerable individuals in healthcare, environmental conservation, girl child education, and widows' protection.",
  },
  {
    id: 3,
    title: "Action Plan",
    content:
      "Through robust advocacy, outreach programs, and collaborative efforts with relevant stakeholders, we aim to:Empower the needy, safeguard their rights, and amplify their voices. Engage governmental bodies and key stakeholders across various sectors as partners. Collaborate with local and international NGOs to realize the vision and mission of Dagceo Touch Foundation. Develop human resources, provide scholarships to deserving yet underprivileged children, and identify and nurture youth soccer talents at grassroots levels.",
  },
];

const Statements = () => {
  return (
    <div className='px-4 w-full flex flex-col items-center py-20 max-w-6xl mx-auto'>
      <TitleModel text='Our Statements' />
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 md:gap-2 xl:gap-16'>
        {statements.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center gap-3 justify-center'>
            <div className='w-16 h-16 bg-gradient-to-tr from-blue-500 to-green-400 flex items-center justify-center animate-pulse rounded-full'>
              {item.id === 1 && <ScanEyeIcon className='w-8 h-8 text-white' />}
              {item.id === 2 && <Footprints className='w-8 h-8 text-white' />}
              {item.id === 3 && <PlugZap className='w-8 h-8 text-white' />}
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
