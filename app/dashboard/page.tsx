import EditDashboard from "@/components/EditDashboard";
import EditHeroText from "@/components/EditHeroText";
// import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { UserButton } from "@clerk/nextjs";
// import "easymde/dist/easymde.min.css";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import { useCallback, useState } from "react";

// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });

const Dashboard = async () => {
  const supabase = createClient();

  const { data: mission } = await supabase
    .from("ourmission")
    .select("*")
    .single();
  
   const { data: values } = await supabase
     .from("ourvalues")
     .select("*")
    .single();
  
   const { data: impact } = await supabase
     .from("ourimpact")
     .select("*")
    .single();
  
  const { data: hero } = await supabase
    .from("herotext")
    .select("*")
    .single();
  
  // Handle the submit of the post form
  // const handleSubmit = async () => {
  //   try {
  //     setTitleReq(false);
  //     setContentReq(false);

  //     if (!title) {
  //       setTitleReq(true);
  //       return;
  //     }

  //     if (!content) {
  //       setContentReq(true);
  //       return;
  //     }

  //     if (title || content) {
  //       setLoading(true);

  //       const { data, error } = await supabaseclient
  //         .from("blogs")
  //         .insert([{ image, title, content }]);

  //       if (error) {
  //         console.error(error);
  //       } else {
  //         console.log("db-data: ", data);
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error Msg: ", error);
  //   } finally {
  //     router.push("/blog");
  //     setLoading(false);
  //   }
  // };

  return (
    <div className='px-4 py-20 w-full min-h-screen max-w-2xl mx-auto'>
      <div className='flex items-center justify-center gap-8'>
        <p className='font-semibold text-xl text-center'>DASHBOARD</p>
        <UserButton afterSignOutUrl='/' />
      </div>
      <div className='mt-12 flex flex-col gap-10'>
        <div>
          <h1 className='mb-3 text-center font-medium text-lg'>
            Edit Hero Text Animation
          </h1>
          <EditHeroText
            id={hero.id}
            text1={hero.text_1}
            text2={hero.text_2}
            text3={hero.text_3}
            text4={hero.text_4}
          />
        </div>
        <div>
          <h1 className='mb-3 text-center font-medium text-lg'>
            Edit Our Mission
          </h1>
          <EditDashboard
            id={mission.id}
            text={mission.content}
            from='ourmission'
            btnText='Update our mission'
          />
        </div>

        <div>
          <h1 className='mb-3 text-center font-medium text-lg'>
            Edit Our Values
          </h1>
          <EditDashboard
            id={values.id}
            text={values.content}
            from='ourvalues'
            btnText='Update our values'
          />
        </div>

        <div>
          <h1 className='mb-3 text-center font-medium text-lg'>
            Edit Our Impact
          </h1>
          <EditDashboard
            id={impact.id}
            text={impact.content}
            from='ourimpact'
            btnText='Update our impact'
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
