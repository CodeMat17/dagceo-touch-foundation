// import EditSimpleMDE from "@/components/EditSimpleMDE";
import EditSimpleMDE from "@/components/EditSimpleMDE";
import TitleModel from "@/components/TitleModel";
import { createClient } from "@/utils/supabase/server";
import { UserButton, auth } from "@clerk/nextjs";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

// export const revalidate = 0;

export const metadata: Metadata = {
  title: "DTF | About-Us",
};

const AboutUs = async () => {
  const supabase = createClient();
  const { userId } = auth();

  let { data: aboutus, error } = await supabase.from("aboutus").select("*");

  if (userId) {
    return (
      <div className='px-5 w-full min-h-screen max-w-2xl mx-auto py-12'>
        <div className='flex items-center justify-center gap-6'>
          <TitleModel text='About Us' />
          <UserButton afterSignOutUrl='/' />
        </div>

        <div className='mt-6'>
          {aboutus &&
            aboutus.map((item) => (
              <div key={item.id}>
                <EditSimpleMDE
                  id={item.id}
                  item={item.content}
                  from='aboutus'
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className='px-4 py-20 max-w-7xl mx-auto'>
      <TitleModel text='About Us' />

      <div className='mt-12 max-w-2xl mx-auto'>
        {aboutus &&
          aboutus.map((item) => (
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

export default AboutUs;
