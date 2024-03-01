

import AddSponsorForm from "@/components/AddSponsorForm";
import TitleModel from "@/components/TitleModel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabaseclient } from "@/lib/supabaseclient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTF | Get Involved",
};

const GetInvolved = () => {
 

  return (
    <div className='px-4 py-20 w-full min-h-screen max-w-6xl mx-auto'>
      <TitleModel text='Get Involved' />

      <div className='mt-12 flex flex-col md:flex-row gap-5'>
        <div className='w-full max-w-3xl mx-auto'>
          <Accordion
            type='single'
            collapsible
            className='border px-5 rounded-xl'>
            <AccordionItem value='item 1'>
              <AccordionTrigger>BECOME A VOLUNTEER</AccordionTrigger>
              <AccordionContent>
                <div className=' text-gray-500 space-y-4'>
                  <p>
                    At Dagceo Touch Foundation, volunteers are at the heart of
                    everything we do. Our dedicated team of volunteers plays a
                    crucial role in helping us achieve our mission of creating
                    positive change in the world. If you're passionate about
                    making a difference and helping those in need, we invite you
                    to join us as a volunteer. Here's how you can get involved:
                  </p>
                  <div>
                    <p className='font-semibold'>1. Health Promotion</p>
                    <p>
                      Improving access to quality healthcare services and
                      advocating for preventive healthcare measures in
                      vulnerable communities. Our health promotion initiatives
                      aim to address healthcare disparities, promote disease
                      prevention, and enhance overall well-being.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold'>
                      2. Girl Child and Widows' Education, Protection, and Care
                    </p>
                    <p>
                      Supporting and protecting girls and widows by equipping
                      them with education, skills, and resources for a brighter
                      future. Our programs focus on providing access to
                      education, promoting gender
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold'>
                      3. Environmental Conservation
                    </p>
                    <p>
                      Implementing initiatives to preserve and restore the
                      environment, promote sustainable practices, and raise
                      awareness about environmental stewardship. From tree
                      planting campaigns to waste management projects, we are
                      committed to protecting our planet for future generations.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold'>4. Community Engagement</p>
                    <p>
                      Fostering partnerships with local communities, government
                      agencies, and stakeholders to address the needs of
                      vulnerable individuals effectively. Through
                      community-based initiatives and outreach programs, we
                      strive to empower communities, build resilience, and
                      promote social cohesion.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold'>5. Advocacy and Awareness</p>
                    <p>
                      Advocating for policies and practices that uphold the
                      rights and well-being of vulnerable populations while
                      raising awareness about their challenges and
                      contributions. Our advocacy efforts aim to amplify the
                      voices of marginalized communities and drive systemic
                      change at local, national, and international levels.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold'>6. Capacity Building</p>
                    <p>
                      Strengthening individuals and communities through
                      training, education, and skills development, enabling
                      self-reliance and resilience. Our capacity building
                      programs empower individuals with the knowledge and skills
                      they need to overcome barriers, seize opportunities, and
                      build a better future for themselves and their
                      communities.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold'>
                      7. Empowerment and Inclusion
                    </p>
                    <p>
                      Enabling vulnerable individuals to fully participate in
                      society, promoting inclusivity, diversity, and equal
                      opportunities. Through empowerment initiatives and
                      inclusive practices, we strive to create a society where
                      everyone has the chance to thrive, regardless of their
                      background or circumstances.
                    </p>
                  </div>
                  <p>
                    Join us in making a difference. Explore our programs and
                    discover how you can get involved in creating positive
                    change in the world.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item 2'>
              <AccordionTrigger>BECOME A SPONSOR</AccordionTrigger>
              <AccordionContent>
           
                <AddSponsorForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item 3'>
              <AccordionTrigger>MAKE A DONATION</AccordionTrigger>
              <AccordionContent>
                <div className='space-y-3'>
                  <p>Donation details</p>
                  <Button className='w-full'>DONATE</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
