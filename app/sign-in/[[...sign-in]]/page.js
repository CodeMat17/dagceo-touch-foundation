import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className='w-full h-screen flex justify-center pt-20'>
      <SignIn />
    </div>

    // <div className='w-full h-screen px-4 pt-32'>
    //   <div className='border py-12 rounded-xl w-full  max-w-md mx-auto shadow-lg'>
    //     <h1 className='text-center font-medium text-2xl'>DTF Dashboard</h1>
    //     <p className='text-center'>Sign in</p>
    //     <form className='flex flex-col gap-3 mt-6 px-5'>
    //       <section className='flex flex-col gap-1'>
    //         <label htmlFor='email'>Email:</label>
    //         <Input id='email' name='email' type='email' required />
    //       </section>
    //       <section className='flex flex-col gap-1'>
    //         <label htmlFor='password'>Password:</label>
    //         <Input id='email' name='email' type='password' required />
    //       </section>
    //       <section className='pt-3'>
    //         <Button formAction={login} className='w-full'>
    //           Submit
    //         </Button>
    //       </section>
    //     </form>
    //   </div>
    // </div>
  );
};

export default SignInPage;
