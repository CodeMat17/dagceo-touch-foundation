import TitleModel from "@/components/TitleModel";
import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTF | About-Us",
};

const AboutUs = async () => {
  const supabase = createClient();
  const { userId } = auth();

  let { data: aboutus, error } = await supabase.from("aboutus").select("*");

  if (userId) {
    return (
      <div className='px-5 w-full min-h-screen py-12'>
        <TitleModel text='About Us' />
        <div className="mt-6">   {aboutus &&
          aboutus.map((item) => <div key={item.id}>{item.content}</div>)}</div>
     
      </div>
    );
  }

  return (
    <div className='px-4 py-20 max-w-7xl mx-auto'>
      <TitleModel text='About Us' />

      <div className='mt-12 space-y-4 max-w-2xl mx-auto'>
        <p>
          At Dagceo Touch Foundation, we believe in the power of compassion,
          equity, and collective action to transform lives and communities
          around the world. Founded on the principle of making a meaningful
          difference in the lives of vulnerable individuals, our organization is
          dedicated to creating a more just and inclusive society where everyone
          has the opportunity to thrive.
        </p>
        <p>Our Mission</p>
        <p>
          Our mission is simple yet profound: to create and advance
          opportunities for vulnerable individuals in healthcare, environmental
          conservation, girl child education, and widows' protection. We work
          tirelessly to empower those in need, advocating for their rights,
          amplifying their voices, and providing them with the resources and
          support they need to build a brighter future.
        </p>
        <p>Our Approach</p>
        <p>
          At Dagceo Touch Foundation, we take a holistic approach to
          development, addressing the root causes of poverty and inequality
          while promoting sustainable change and lasting impact. Through robust
          advocacy, outreach programs, and collaborative efforts with
          stakeholders, we strive to foster partnerships, strengthen
          communities, and drive positive social change.
        </p>
        <p>Our Values</p>
        <p>
          Integrity, inclusivity, and accountability are at the heart of
          everything we do. We are committed to upholding the highest ethical
          standards, embracing diversity and inclusion, and ensuring
          transparency and accountability in all our operations.
        </p>
        <p>Our Impact</p>
        <p>
          Since our inception, we have made significant strides in healthcare,
          education, environmental conservation, and women's empowerment. From
          providing access to quality healthcare services to promoting
          environmental stewardship and supporting girl child education, our
          work has touched the lives of countless individuals and communities,
          creating a ripple effect of positive change.
        </p>
        <p>Join Us</p>
        <p>
          Join us on our journey of compassion, equity, and social justice.
          Together, we can make a difference and build a world where everyone
          has the opportunity to thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
