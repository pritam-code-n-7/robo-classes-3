import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ButtonDemo } from "@/demo/ButtonDemo";

interface totalCardT {
  subtotal: string;
  total: string;
}

const TotalCard = ({ subtotal, total }: totalCardT) => {
  return (
    <div className="flex justify-center ">
      <Card className="max-w-2xl h-auto mt-10 bg-slate-50 dark:bg-black">
        <CardHeader>
          <p className="text-xl ">Cart Totals</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 items-center">
          <div className="flex flex-row gap-32 items-center">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-xl font-bold">INR {subtotal}</p>
          </div>
          <div className="flex flex-row justify-between items-center font-semibold gap-32">
            <p className="text-xl text-sky-500">Total</p>
            <p className="text-xl text-sky-500">INR {total}</p>
          </div>
        </CardContent>
        <CardFooter>
          <ButtonDemo
            name="PROCEED TO CHECKOUT"
            type="button"
            className="py-6 px-16 text-xl font-semibold rounded-3xl bg-sky-500"
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default TotalCard;
