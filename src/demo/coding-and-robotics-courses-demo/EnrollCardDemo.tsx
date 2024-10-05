import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import RoundedButton from "../RoundedButton";

export function EnrollCardDemo() {
  return (
    <Card className="w-[500px] h-[350px] bg-custom-gradient rounded-xl flex border-none">
      <div className="p-4">
        <CardHeader className="flex-wrap gap-10">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="text-4xl font-bold">Robotics,STEM and programming courses for kids</p>
            <div>
              <p className="text-xl">Building critical thinking and skills </p>
              <p className="text-xl">of the future</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-row items-center gap-3">
          <RoundedButton
            name="Free Trial Class Registration"
            type="button"
            className="py-2 px-5 font-semibold rounded-full bg-white text-sky-500 hover:bg-sky-500 border-2 border-sky-500
             hover:text-white shadow-md transition-all duration-300 delay-75 ease-in-out "
          />
        </CardFooter>
      </div>
    </Card>
  );
}
