import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import React from "react";

interface cardDemoT {
  title: string;
  list: string;
}

const CardDemo = ({ title, list }: cardDemoT) => {
  return (
    <Card className="max-w-6xl h-auto bg-gray-50 p-10 dark:text-black dark:bg-sky-100">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="gap-2">
          <AccordionTrigger className="text-2xl font-extrabold focus:text-lime-500">
            {title}
          </AccordionTrigger>

          <AccordionContent className="text-lg flex flex-col gap-2">
            <ul className="list-inside list-disc font-extrabold ">
              <li>{list}</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default CardDemo;
