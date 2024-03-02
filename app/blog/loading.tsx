import { CircleDotDashed } from "lucide-react"

const loading = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-4'>
      <CircleDotDashed className='font-semibold text-4xl w-32 h-32 animate-spin' />
      <p>loading</p>
    </div>
  );
}

export default loading