import BlogImage from "@/components/BlogImage";
import TitleModel from "@/components/TitleModel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { supabaseclient } from "../../lib/supabaseclient";

export const revalidate = 0;

// async function fetchBlogs() {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(`http://127.0.0.1:1337/api/blogs`, options);
//     const response = await res.json();
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

export const metadata: Metadata = {
  title: "DTF | Blog Page",
};

const BlogPage = async () => {

  let { data: blogs, error } = await supabaseclient.from("blogs").select("*");

  return (
    <div className='w-full min-h-screen max-w-6xl mx-auto px-4 py-20'>
      <TitleModel text='Blog Posts' />
      {/* <pre>{JSON.stringify(blogs.data, null, 2)}</pre> */}
      <div className='mt-12'>
        {blogs && blogs.length < 1 ? (
          <div className='text-gray-500 text-center py-32'>
            No post available at the moment.
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {blogs &&
              blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className='shadow-md transition transform duration-500 hover:scale-105 overflow-hidden'>
                  {blog.image ? (
                    <div className=''>
                      <BlogImage image={blog.image} />
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
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
