import { createClient } from "@/utils/supabase/server";

import AddSponsorForm from "@/components/AddSponsorForm";
import EditSimpleMDE from "@/components/EditSimpleMDE";
import TitleModel from "@/components/TitleModel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export const metadata: Metadata = {
  title: "DTF | Get Involved",
};

const GetInvolved = async () => {
  const supabase = createClient();
  const { userId } = auth();

  const { data } = await supabase.from("getinvolved").select("*");

  if (userId) {
    return (
      <div className='px-5 w-full min-h-screen max-w-2xl mx-auto py-12'>
        <div className='flex items-center justify-center gap-6'>
          <TitleModel text='Get Involved' /> <UserButton afterSignOutUrl='/' />
        </div>

        <div className='mt-6'>
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <EditSimpleMDE
                  id={item.id}
                  item={item.content}
                  from='getinvolved'
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className='px-4 py-20 w-full min-h-screen max-w-6xl mx-auto'>
      <TitleModel text='Get Involved' />

      <div className='mt-12 flex flex-col md:flex-row gap-5'>
        <div className='w-full max-w-3xl mx-auto'>
          <Accordion
            type='single'
            collapsible
            className='border px-5 rounded-xl'>
            {data &&
              data.map((item) => (
                <AccordionItem key={item.id} value='item 1'>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className=''>
                      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                        {item.content.replace(/\n/gi, "\n\n &nbsp;")}
                      </ReactMarkdown>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}

            <AccordionItem value='item 2'>
              <AccordionTrigger>BECOME A SPONSOR</AccordionTrigger>
              <AccordionContent>
                <AddSponsorForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item 3'>
              <AccordionTrigger>MAKE A DONATION</AccordionTrigger>
              <AccordionContent>
                <div className='space-y-3'>
                  <p>Donation details</p>
                  <Button className='w-full'>DONATE</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
