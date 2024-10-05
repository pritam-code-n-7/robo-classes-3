import {
  FaqData,
  FaqOne,
  FaqPointsO,
  FaqPointsT,
  FaqTwo,
} from "@/data/FaqData";
import CardDemo from "@/demo/roboromp-demo/CardDemo";
import React from "react";
import { Card } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqSection = () => {
  return (
    <div className="flex flex-col items-center p-20 bg-[#f0f0f0] dark:bg-black gap-10">
      <p className="text-4xl font-bold">FAQ</p>
      <div className="flex flex-col items-center gap-6">
        <Card className="w-[1000px] h-auto bg-gray-50 p-10 dark:text-black dark:bg-sky-100">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="gap-2">
              <AccordionTrigger className="text-2xl font-extrabold focus:text-lime-500">
                What are the important dates?
              </AccordionTrigger>

              <AccordionContent className="text-lg flex flex-col gap-2">
                <ul className="list-inside list-disc font-extrabold right-course-bullet">
                  {FaqOne.map((item, index) => (
                    <li key={index}>{item.li}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        {FaqData.map((item, index) => (
          <div className="w-[1000px] " key={index}>
            <CardDemo {...item} />
          </div>
        ))}
        <Card className="w-[1000px] h-auto bg-gray-50 p-10 dark:text-black dark:bg-sky-100">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="gap-2">
              <AccordionTrigger className="text-2xl font-extrabold focus:text-lime-500">
                What are the things I need to submit to participate in this
                competition?
              </AccordionTrigger>

              <AccordionContent className="text-lg flex flex-col gap-2">
                <p className="text-xl mb-2">You need to submit the followings:</p>
                <ul className="list-inside list-disc font-extrabold right-course-bullet space-y-4">
                  <li>
                    Project Video: You need to create a video between 10 minutes
                    to 15 minutes duration covering the following things:
                    <ul className="list-inside list-disc font-extrabold space-y-2 ml-10">
                      {FaqPointsO.map((item, index) => (
                        <li key={index}>{item.point}</li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    Project Code: Please take screenshot’s of your code and
                    share the same with us while sending the email as detailed
                    below.
                  </li>
                  <li>
                    How to share: Upload everything mentioned below to a google
                    drive folder and share the google drive link using your
                    registered email address to romproboclasses@gmail.com and
                    roboromp2024@roboclasses.com.
                    <ul className="list-inside list-disc font-extrabold  space-y-2 ml-10">
                      {FaqPointsT.map((item, index) => (
                        <li key={index}>{item.point}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="w-[1000px] h-auto bg-gray-50 p-10 dark:text-black dark:bg-sky-100">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="gap-2">
              <AccordionTrigger className="text-2xl font-extrabold focus:text-lime-500">
                How can I become a partner ?
              </AccordionTrigger>

              <AccordionContent className="text-lg flex flex-col gap-2">
                <ul className="list-inside list-disc font-extrabold right-course-bullet space-y-6">
                  {FaqTwo.map((item, index) => (
                    <li key={index}>{item.li}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default FaqSection;
