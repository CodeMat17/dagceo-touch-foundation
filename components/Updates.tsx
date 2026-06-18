import BlogImage from "./BlogImage";
import TitleModel from "./TitleModel";
import { supabaseclient } from "@/lib/supabaseclient";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export const revalidate = 0;

const Updates = async () => {
  const { data: blogs } = await supabaseclient
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .range(0, 2);

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <TitleModel text="Latest Updates" />

        <div className="mt-14">
          {!blogs || blogs.length < 1 ? (
            <div className="flex flex-col items-center gap-2 py-24 text-gray-400">
              <p className="text-base">No posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800/60 dark:bg-gray-900/60">
                  {blog.image ? (
                    <div className="aspect-video w-full overflow-hidden">
                      <BlogImage image={blog.image} width="600" height="340" />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:from-gray-800 dark:to-gray-700">
                      Blog Post
                    </div>
                  )}

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {dayjs(blog.created_at).format("MMM DD, YYYY")}
                    </div>
                    <h3 className="line-clamp-2 text-base font-extrabold leading-snug transition-colors duration-200 group-hover:text-violet-600">
                      {blog.title}
                    </h3>
                    <div className="line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                        {blog.content.replace(/\n/gi, "\n\n &nbsp;")}
                      </ReactMarkdown>
                    </div>
                    <span className="mt-auto flex items-center gap-1 text-xs font-bold text-violet-600">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Updates;
