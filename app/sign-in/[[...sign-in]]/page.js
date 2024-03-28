import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className='w-full h-screen flex justify-center pt-20'>
      <SignIn afterSignInUrl='/dashboard' />
    </div>
  );
};

export default SignInPage;
