import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import TitleModel from "./TitleModel";

const updateData = [
  {
    id: 1,
    img: "/pht1.jpg",
    title: "Youth Empowerment Program Expands Reach",
    date: "Nov 12, 2023",
  },
  {
    id: 2,
    img: "/pht1.jpg",
    title: "Humanitarian Aid Reaches Remote Communities",
    date: "Dec 29, 2023",
  },
  {
    id: 3,
    img: "/pht1.jpg",
    title: "Our Partnership with Tech Giants to combat Online Extremism",
    date: "Jan 16, 2024",
  },
];

const Updates = () => {
  return (
    <div className='px-4 py-20 flex flex-col items-center justify-center max-w-6xl mx-auto'>
      <TitleModel text='Latest Update (3)' />
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12'>
        {updateData.map((data) => (
          <Card
            key={data.id}
            className='w-full overflow-hidden transition transform duration-500 hover:shadow-lg hover:scale-105'>
            <Image
              alt=''
              priority
              src='/pht1.jpg'
              width={300}
              height={300}
              className='w-full aspect-video'
            />
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore!
              </CardDescription>
            </CardHeader>
                <CardFooter className=" flex justify-between items-center">
                    <p className="text-sm">{data.date}</p>
              <Button>Learn more</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Updates;
