import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full font-bold" style={{ letterSpacing: "0.09em" }} >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-bold">Bridiging the gender digital divide</AccordionTrigger>
          <AccordionContent className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-bold">Education in emergencies</AccordionTrigger>
          <AccordionContent className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-bold">Inclusive education for children with disabilities</AccordionTrigger>
          <AccordionContent className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  