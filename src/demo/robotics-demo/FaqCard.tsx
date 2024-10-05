import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface faqTypes {
  question: string;
  answer: string;
}

const FaqCard = ({ question, answer }: faqTypes) => {
  return (
    <div>
      <Card className="w-[300px] shadow-lg dark:shadow-black">
        <CardContent className="flex flex-col items-center gap-4 py-6 ">
          <strong className="font-bold text-lg">{question}</strong>
          <p className="font-medium" style={{ letterSpacing: "0.05em" }}>
            {answer}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaqCard;
