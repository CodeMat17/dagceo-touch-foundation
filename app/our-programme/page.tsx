import TitleModel from "@/components/TitleModel"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTF | Our Programs",
};

const OurPrograms = () => {
  return (
    <div className='px-4 py-20 w-full max-w-2xl mx-auto'>
      <TitleModel text='Our Programs' />
      <div className='mt-12 space-y-4'>
        <p>
          At Dagceo Touch Foundation, we are committed to creating and advancing
          opportunities for vulnerable individuals in key areas of focus.
          Through our diverse range of programs, we address pressing social
          challenges and work towards building a more equitable and sustainable
          world. Explore our programs below to learn more about our areas of
          impact:
        </p>
        <p>1. Girl Child and Widows' Education, Protection, and Care</p>
        <p>
          Supporting and protecting girls and widows by equipping them with
          education, skills, and resources for a brighter future. Our programs
          focus on providing access to education, promoting gender equality, and
          empowering women and girls to reach their full potential.
        </p>
        <p>2. Health Promotion</p>
        <p>
          Improving access to quality healthcare services and advocating for
          preventive healthcare measures in vulnerable communities. Our health
          promotion initiatives aim to address healthcare disparities, promote
          disease prevention, and enhance overall well-being.
        </p>

        <p>3. Environmental Conservation</p>
        <p>
          Implementing initiatives to preserve and restore the environment,
          promote sustainable practices, and raise awareness about environmental
          stewardship. From tree planting campaigns to waste management
          projects, we are committed to protecting our planet for future
          generations.
        </p>
        <p>4. Community Engagement</p>
        <p>
          Fostering partnerships with local communities, government agencies,
          and stakeholders to address the needs of vulnerable individuals
          effectively. Through community-based initiatives and outreach
          programs, we strive to empower communities, build resilience, and
          promote social cohesion.
        </p>
        <p>5. Advocacy and Awareness</p>
        <p>
          Advocating for policies and practices that uphold the rights and
          well-being of vulnerable populations while raising awareness about
          their challenges and contributions. Our advocacy efforts aim to
          amplify the voices of marginalized communities and drive systemic
          change at local, national, and international levels.
        </p>
        <p>6. Capacity Building</p>
        <p>
          Strengthening individuals and communities through training, education,
          and skills development, enabling self-reliance and resilience. Our
          capacity building programs empower individuals with the knowledge and
          skills they need to overcome barriers, seize opportunities, and build
          a better future for themselves and their communities.
        </p>
        <p>7. Empowerment and Inclusion</p>
        <p>
          Enabling vulnerable individuals to fully participate in society,
          promoting inclusivity, diversity, and equal opportunities. Through
          empowerment initiatives and inclusive practices, we strive to create a
          society where everyone has the chance to thrive, regardless of their
          background or circumstances.
        </p>
      </div>
    </div>
  );
}

export default OurPrograms