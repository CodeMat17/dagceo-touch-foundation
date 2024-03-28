import EditDashboard from "@/components/EditDashboard";
import EditHeroText from "@/components/EditHeroText";
import { createClient } from "@/utils/supabase/server";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { userId } = auth();
  const supabase = createClient();

  if (!userId) {
    redirect("/");
  }

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

  const { data: hero } = await supabase.from("herotext").select("*").single();


  return (
    <div className='px-4 py-20 w-full min-h-screen max-w-2xl mx-auto'>
      <div className='relative flex items-center justify-center gap-8'>
        <p className='font-semibold text-xl text-center'>DASHBOARD</p>
        <div className='absolute right-0 flex items-center gap-4 '>
          <UserButton afterSignOutUrl='/' />
        </div>
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
