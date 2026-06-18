import CreateBlogPost from "@/components/CreateBlogPost";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const NewBlogPost = () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className='px-5 w-full min-h-screen max-w-2xl mx-auto py-12'>
      <div className='flex items-center justify-center gap-6 mb-12'>
        <h1 className='text-center font-medium text-xl'>New Blog Post</h1>
        <UserButton afterSignOutUrl='/' />
      </div>
      <CreateBlogPost />
    </div>
  );
};

export default NewBlogPost;
