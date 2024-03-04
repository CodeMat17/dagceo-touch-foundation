import GetInvolved from "@/components/GetInvolved";
import HeroPage from "@/components/HeroPage";
import Programs from "@/components/ProgramsInitiatives";
import Statements from "@/components/Statements";
import Updates from "@/components/Updates";

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <HeroPage />
      <Statements />
      <Programs />
      <GetInvolved />
      {/* <WhoWeAre /> */}
      <Updates />
    </main>
  );
}
