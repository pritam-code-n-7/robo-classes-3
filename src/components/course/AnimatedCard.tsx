import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";



const AnimatedCard = ({ src }:{src:string}) => {
  return (
    <Card className="w-[400px] h-[450px] bg-gray-50 dark:bg-slate-200">
      <CardContent className="p-4 ml-2">
        <Image src={src} alt='animated card picture' width={380} height={20} />
      </CardContent>
    </Card>
  );
};

export default AnimatedCard;
