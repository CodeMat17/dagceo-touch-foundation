import Image from "next/image";

const LogoComponent = ({ classnames }: any) => {
  return (
    <div
      className={`relative ${classnames} rounded-full overflow-hidden object-cover object-center`}>
      <Image alt='logo' priority fill src='/dtf_logo.png' />
    </div>
  );
};

export default LogoComponent;
