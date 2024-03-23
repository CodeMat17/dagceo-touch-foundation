import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import TitleModel from "./TitleModel";
import { supabaseclient } from "@/lib/supabaseclient";
import BlogImage from "./BlogImage";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";

export const revalidate = 0;

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

const Updates = async () => {
 let { data: blogs, error } = await supabaseclient
   .from("blogs")
   .select("*")
   .order("created_at", { ascending: false }).range(0, 2);

  return (
    <div className='px-4 py-20 flex flex-col items-center justify-center max-w-6xl mx-auto'>
      <TitleModel text='Latest Update (3)' />

    

      <div className='mt-12'>
        {blogs && blogs.length < 1 ? (
          <div className='text-gray-500 text-center py-32'>
            No post available at the moment.
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {blogs &&
              blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                  <Card className='shadow-md transition transform duration-500 hover:scale-105 overflow-hidden'>
                    {blog.image ? (
                      <div className=''>
                        <BlogImage
                          image={blog.image}
                          width='600'
                          height='200'
                        />
                      </div>
                    ) : (
                      <div className='flex justify-center px-5 py-8 text-xl font-bold'>
                        BLOG POST
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{blog.title}</CardTitle>
                      <span className='text-sm text-gray-500'>
                        Posted on{" "}
                        {dayjs(blog.created_at).format("MMM DD, YYYY, h:mm A")}
                      </span>
                    </CardHeader>
                    <CardContent className='line-clamp-2'>
                      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                        {blog.content.replace(/\n/gi, "\n\n &nbsp;")}
                      </ReactMarkdown>
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Updates;
