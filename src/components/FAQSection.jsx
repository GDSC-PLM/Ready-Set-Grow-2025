"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom styled AccordionTrigger with improved transitions
const CustomAccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, ref) => (
    <AccordionTrigger
      ref={ref}
      className={`group flex w-full justify-between items-center px-6 py-4 text-left text-xl font-medium transition-all duration-300 ease-in-out hover:no-underline ${className}`}
      {...props}
    >
      {children}
    </AccordionTrigger>
  )
);
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

// Custom styled AccordionContent with improved transitions
const CustomAccordionContent = React.forwardRef(
  ({ children, className, ...props }, ref) => (
    <AccordionContent
      ref={ref}
      className={`AccordionContent overflow-hidden px-6 pb-4 text-lg transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`}
      {...props}
    >
      <div className="pt-2 pb-2 transition-all duration-300 ease-in-out">
        {children}
      </div>
    </AccordionContent>
  )
);
CustomAccordionContent.displayName = "CustomAccordionContent";

export default function FAQSection() {
  return (
    <section className="bg-[#FDEFE6] px-[20px] sm:px-[80px] md:px-[100px] xl:px-[150px] py-[120px] mb-4 flex w-full justify-center lg:justify-between items-center">
      {/* Decorative elements */}

      <div className="w-full">
        <div className="mb-16">
          <div className="relative inline-block mb-6">
            <h4
              className="text-[#FDB528] text-5xl sm:text-6xl font-black"
              style={{ textShadow: "-3px 3px 0px #000" }}
            >
              FAQs
            </h4>
          </div>

          <h5 className="text-lg sm:text-xl font-medium text-gray-800">
            We help students navigate their careers and unlock pathways to
            success by equipping them with deliberate, ethical, and imaginative
            strategies for professional growth.
          </h5>
        </div>

        <div className="relative w-full">
          <Accordion type="single" collapsible className="w-full space-y-6">
            <div className="border-black border-2 transition-all duration-300 rounded-2xl hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <AccordionItem
                value="item-1"
                className="border-0 rounded-2xl bg-white overflow-hidden"
              >
                <CustomAccordionTrigger>
                  What is this event about?
                </CustomAccordionTrigger>
                <CustomAccordionContent>
                  This event is about networking with professionals and
                  expanding your business connections. You'll have the
                  opportunity to meet industry leaders and learn about the
                  latest trends in your field.
                </CustomAccordionContent>
              </AccordionItem>
            </div>

            <div className="border-black border-2 transition-all duration-300 rounded-2xl hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <AccordionItem
                value="item-2"
                className="border-0 rounded-2xl bg-white overflow-hidden"
              >
                <CustomAccordionTrigger>
                  How can I prepare for the event?
                </CustomAccordionTrigger>
                <CustomAccordionContent>
                  To prepare for the event, bring business cards, prepare a
                  brief introduction about yourself, and research the attending
                  companies. Dress professionally and come with questions ready
                  for the professionals you'll meet.
                </CustomAccordionContent>
              </AccordionItem>
            </div>

            <div className="border-black border-2 transition-all duration-300 rounded-2xl hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <AccordionItem
                value="item-3"
                className="border-0 rounded-2xl bg-white overflow-hidden"
              >
                <CustomAccordionTrigger>
                  What are the benefits of attending?
                </CustomAccordionTrigger>
                <CustomAccordionContent>
                  Benefits include expanding your professional network, learning
                  about job opportunities, gaining industry insights, and
                  developing your communication skills. You'll also receive
                  resources to help with your career development.
                </CustomAccordionContent>
              </AccordionItem>
            </div>

            <div className="border-black border-2 transition-all duration-300 rounded-2xl hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <AccordionItem
                value="item-4"
                className="border-0 rounded-2xl bg-white overflow-hidden"
              >
                <CustomAccordionTrigger>
                  Is there a cost to attend this event?
                </CustomAccordionTrigger>
                <CustomAccordionContent>
                  This event is free for all registered students. Alumni and
                  professionals may need to pay a small registration fee. Check
                  our website for the most up-to-date information on
                  registration and any associated costs.
                </CustomAccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
