import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const OrganizeCard = ({ src }: { src: string }) => {
  return (
    <Card className="w-[280px] h-[180px] hover:bg-gray-200 transition-colors">
      <CardContent className="mt-10 px-10">
        <Image src={src} alt="ROBO CLASSES logo" width={200} height={20} className='w-[180px] h-[120px] rounded-xl p-2'/>
      </CardContent>
    </Card>
  );
};

export default OrganizeCard;
