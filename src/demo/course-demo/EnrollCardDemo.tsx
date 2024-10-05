import * as React from "react";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import RoundedButton from "../RoundedButton";
import { cartTypes } from "@/types/CartTypes";

export function EnrollCardDemo({course}:cartTypes) {
  return (
    <Card className="w-[500px] h-[340px] bg-custom-gradient rounded-xl flex border-none">
      <div className="p-4">
        <CardHeader className="flex-wrap gap-10">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <p className="text-4xl font-bold">
              {course}
            </p>
            <div>
              <p className="text-xl">
                Building critical thinking and skills of{" "}
              </p>
              <p className="text-xl">the future</p>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-row items-center gap-2">
          <RoundedButton
            name="Free Trial Class"
            type="button"
            className="py-3 px-10 rounded-full bg-sky-500 text-white hover:bg-white 
             hover:text-sky-500 shadow-md transition-all duration-300 delay-75 ease-in-out"
          />
        </CardFooter>
      </div>
    </Card>
  );
}
