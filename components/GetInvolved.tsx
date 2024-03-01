import { Flower2, HandshakeIcon, Leaf } from "lucide-react";
import TitleModel from "./TitleModel";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const GetInvolved = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <TitleModel text='Get Involved' />
      <div className='mt-12 px-4 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12'>
        <Card className='shadow-md'>
          <CardHeader>
            <div className='flex justify-center'>
              <div className='relative rounded-full p-3 bg-gray-400/10 shadow'>
                <Flower2 className='w-9 h-9 bg-clip-text bg-gradient-to-tl from-orange-500 to-red-500' />
                <div className='absolute top-0 -left-2 w-16 h-16 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div className='absolute top-0 -right-2 w-16 h-16 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                <div className='absolute -bottom-2 left-4 w-16 h-16 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
              </div>
            </div>
            <CardTitle className='pt-2 text-center font-light'>
              We Need Volunteers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              ea quo ipsam molestiae quae? Fugit ipsa, soluta enim consequuntur
              animi nihil repudiandae!
            </p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <Button asChild className='shadow-md' variant='outline'>
              <Link href='/get-involved'> Learn more</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className='shadow-md'>
          <CardHeader>
            <div className='flex justify-center'>
              <div className='relative rounded-full p-3 bg-gray-400/10 shadow'>
                <Leaf className='w-9 h-9 bg-clip-text bg-gradient-to-tl from-orange-500 to-red-500' />
                <div className='absolute top-0 -left-2 w-16 h-16 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div className='absolute top-0 -right-2 w-16 h-16 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                <div className='absolute -bottom-2 left-4 w-16 h-16 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
              </div>
            </div>
            <CardTitle className='pt-2 text-center font-light'>
              Become A Sponsor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              ea quo ipsam molestiae quae? Fugit ipsa, soluta enim consequuntur
              animi nihil repudiandae!
            </p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <Button asChild className='shadow-md' variant='outline'>
              <Link href='/get-involved'> Learn more</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className='shadow-md'>
          <CardHeader>
            <div className='flex justify-center'>
              <div className='relative rounded-full p-3 bg-gray-400/10 shadow'>
                <HandshakeIcon className='w-9 h-9 bg-clip-text bg-gradient-to-tl from-orange-500 to-red-500' />
                <div className='absolute top-0 -left-2 w-16 h-16 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div className='absolute top-0 -right-2 w-16 h-16 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                <div className='absolute -bottom-2 left-4 w-16 h-16 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
              </div>
            </div>
            <CardTitle className='pt-2 text-center font-light'>
              Make A Donation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              ea quo ipsam molestiae quae? Fugit ipsa, soluta enim consequuntur
              animi nihil repudiandae!
            </p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <Button asChild className='shadow-md' variant='outline'>
              <Link href='/get-involved'> Learn more</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GetInvolved;
