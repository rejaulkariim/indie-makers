import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Camera, FileCheck } from 'lucide-react';

const UserHomePage = () => {
  return (
    <section className="px-6 bg-gray-400 rounded-xl">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Your Indie Makers is ready! Here’s how to make it yours
          </AccordionTrigger>
          <AccordionContent>
            Adding some details helps visitors learn more about you and what you
            plan to share here.
            <div className="flex justify-between my-10">
              <div>
                <p className="inline-flex items-center">
                  <Camera className="mr-4" /> Add a profile photo
                </p>
              </div>
              <FileCheck />
            </div>
            <div className="flex justify-between my-10">
              <div>
                <p className="inline-flex items-center">
                  <Camera className="mr-4" /> Describe your page
                </p>
              </div>
              <FileCheck />
            </div>
            <div className="flex justify-between my-10">
              <div>
                <p className="inline-flex items-center">
                  <Camera className="mr-4" />
                  Make your first public post
                </p>
                <p>
                  Let fans know what to expect with a welcome post or a bonus
                  piece of work that&apos;s available to everyone. Public posts
                  are shared more and can bring in more visitors.
                </p>
              </div>
              <FileCheck />
            </div>
            <div className="flex justify-between my-10">
              <div>
                <p className="inline-flex items-center">
                  <Camera className="mr-4" /> Publish your page
                </p>
              </div>
              <FileCheck />
            </div>
            <div className="flex justify-between my-10">
              <div>
                <p className="inline-flex items-center">
                  <Camera className="mr-4" />
                  Tell people
                </p>
              </div>
              <FileCheck />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default UserHomePage;
