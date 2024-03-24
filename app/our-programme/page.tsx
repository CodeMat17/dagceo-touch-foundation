import EditSimpleMDE from "@/components/EditSimpleMDE";
import TitleModel from "@/components/TitleModel";
import { createClient } from "@/utils/supabase/server";
import { UserButton, auth } from "@clerk/nextjs";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export const metadata: Metadata = {
  title: "DTF | Our Programmes",
};

const OurPrograms = async () => {
  const supabase = createClient();
  const { userId } = auth();

  let { data: programmes, error } = await supabase
    .from("programmes")
    .select("*");

  if (userId) {
    return (
      <div className='px-5 w-full min-h-screen max-w-2xl mx-auto py-12'>
        <div className='flex items-center justify-center gap-6'>
          <TitleModel text='Our Programmes' />{" "}
          <UserButton afterSignOutUrl='/' />
        </div>

        <div className='mt-6'>
          {programmes &&
            programmes.map((item) => (
              <div key={item.id}>
                <EditSimpleMDE
                  id={item.id}
                  item={item.content}
                  from='programmes'
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className='px-4 py-20 w-full max-w-2xl mx-auto'>
      <TitleModel text='Our Programmes' />

      <div className='mt-12 max-w-2xl mx-auto'>
        {programmes &&
          programmes.map((item) => (
            <div key={item.id}>
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {item.content.replace(/\n/gi, "\n\n &nbsp;")}
              </ReactMarkdown>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurPrograms;
