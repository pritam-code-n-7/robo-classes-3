import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface organizeCardT {
  src: string;
  title: string;
}

const OrganizeCard = ({ src, title }: organizeCardT) => {
  return (
    <Card className="w-[360px] h-[210px] rounded-2xl shadow-lg shadow-purple-200 border-none
     bg-[#f0f0f0] dark:bg-black dark:shadow-none">
      <CardContent className="mt-8 flex flex-col items-center gap-2">
        <Image src={src} alt="ROBO CLASSES logo" width={100} height={100} />
        <p className="text-xl font-bold">{title}</p>
      </CardContent>
    </Card>
  );
};

export default OrganizeCard;
