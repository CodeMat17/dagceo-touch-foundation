"use client";

import { createClient } from "@/utils/supabase/client";
import dayjs from "dayjs";
import { Pencil, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import CreateBlogPost from "./CreateBlogPost";
import { Button } from "./ui/button";

type Blog = {
  id: string;
  title: string;
  created_at: string;
};

const ManageBlogPosts = ({ blogs }: { blogs: Blog[] }) => {
  const supabase = createClient();
  const router = useRouter();
  const [showCreate, setShowCreate] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      setDeletingId(id);
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) {
        toast.error("Failed to delete post", { position: "top-center" });
      } else {
        toast.success("Post deleted", { position: "top-center" });
        router.refresh();
      }
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <Button
        onClick={() => setShowCreate((prev) => !prev)}
        variant='outline'
        className='w-full flex items-center gap-2'>
        <Plus size={16} />
        {showCreate ? "Cancel" : "New Post"}
      </Button>

      {showCreate && (
        <div className='border rounded-lg p-4'>
          <CreateBlogPost />
        </div>
      )}

      <div className='flex flex-col gap-2'>
        {blogs.length === 0 && (
          <p className='text-center text-sm text-muted-foreground py-4'>
            No blog posts yet.
          </p>
        )}
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className='flex items-center justify-between border rounded-lg px-4 py-3 gap-3'>
            <div className='flex flex-col min-w-0'>
              <p className='font-medium text-sm truncate'>{blog.title}</p>
              <p className='text-xs text-muted-foreground'>
                {dayjs(blog.created_at).format("MMM DD, YYYY")}
              </p>
            </div>
            <div className='flex items-center gap-2 shrink-0'>
              <Link href={`/blog/${blog.id}`}>
                <Button variant='outline' size='icon'>
                  <Pencil size={14} />
                </Button>
              </Link>
              <Button
                variant='outline'
                size='icon'
                className='text-red-600 border-red-300 hover:bg-red-50'
                disabled={deletingId === blog.id}
                onClick={() => handleDelete(blog.id)}>
                <Trash2 size={14} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBlogPosts;
