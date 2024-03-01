import Link from "next/link";
import TitleModel from "./TitleModel";
import { Button } from "./ui/button";

const Programs = () => {
  return (
    <div className='px-4 py-20 flex flex-col items-center justify-center'>
      <TitleModel text={'Programs & Initiatives'} />

      <div className='mt-12 w-full max-w-2xl mx-auto flex gap-6 justify-center'>
        <div className='space-y-4'>
          <p>
            At Dagceo Touch Foundation, we are committed to creating and
            advancing opportunities for vulnerable individuals in key areas of
            focus. Through our diverse range of programs, we address pressing
            social challenges and work towards building a more equitable and
            sustainable world. Explore our programs below to learn more about
            our areas of impact:
          </p>
          <p>1. Girl Child and Widows' Education, Protection, and Care</p>
          <p>
            Supporting and protecting girls and widows by equipping them with
            education, skills, and resources for a brighter future. Our programs
            focus on providing access to education, promoting gender equality,
            and empowering women and girls to reach their full potential.
          </p>

          {/* <Card className='transition transform duration-500 hover:scale-110 overflow-hidden max-w-[350px]'>
            <div className='relative aspect-video w-[350px]'>
              <Image
                alt=''
                priority
                fill
                src='/pht1.jpg'
                // width={200}
                // height={200}
                className='w-full'
              />
            </div>
            <CardHeader className='border'>
              <CardTitle>Help the ecosystem</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                ab a impedit praesentium nesciunt beatae!
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </div>
      <div className='mt-4'>
        <Button asChild variant='outline'>
          <Link href='/our-programs'>Read more...</Link>
        </Button>
      </div>
    </div>
  );
};

export default Programs;
