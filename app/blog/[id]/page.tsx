import BlogImage from "@/components/BlogImage";
import { supabaseclient } from "@/lib/supabaseclient";
import dayjs from "dayjs";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export const revalidate = 0;

const BlogDetails = async ({ params: { id } }: any) => {
  const { data: blog } = await supabaseclient
    .from("blogs")
    .select("*")
    .match({ id })
    .single();

  if (!blog) {
    notFound;
  }

  return (
    <div className='px-4 py-20 w-full max-w-4xl mx-auto min-h-screen'>
      {/* <pre>{JSON.stringify(blog, null, 3)}</pre> */}
      <div>
    
        <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
          <div className='max-w-md'>
            <h2 className='text-2xl md:text-3xl font-semibold'>{blog.title}</h2>
            <p className='text-sm text-gray-500'>
              Posted on: {dayjs(blog.created_at).format("MMM DD, YYYY")}
            </p>
          </div>
          <div className='rounded-xl overflow-hidden'>
            {blog.image && (
              <BlogImage width='400' height='400' image={blog.image} />
            )}
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {blog.content.replace(/\n/gi, "\n\n &nbsp;")}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetails;
