import { CircleDotDashed } from "lucide-react"

const loading = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center gap-4 px-5 pt-32'>
      <CircleDotDashed className='font-semibold text-4xl w-32 h-32 animate-spin' />
      <p>loading</p>
    </div>
  );
}

export default loading