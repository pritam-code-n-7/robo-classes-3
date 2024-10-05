'use client'

import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cardType } from "@/types/CourseTypes";
import RoundedButton from "../RoundedButton";
import { DialogDemo } from "../DialogDemo";



export function EnrollCardDemo({title}:cardType) {


  return (
    <Card className="w-[550px] h-[300px] bg-custom-gradient rounded-xl flex border-none">
      <div className="p-4">
        <CardHeader className="flex-wrap gap-10">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="text-4xl font-bold">{title}</p>
            <div>
              <p className="text-xl">
                Building critical thinking and skills 
              </p>
              <p className="text-xl">of the future</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-row items-center gap-2">
        <RoundedButton
            name="Enroll Now"
            type="button"
            className="py-2 px-5 rounded-lg bg-white text-sky-500 hover:bg-sky-500 border-2 border-sky-500
             hover:text-white shadow-md transition-all duration-300 delay-75 ease-in-out font-semibold"
          />
          <DialogDemo />
        </CardFooter>
      </div>
    </Card>
  );
}
