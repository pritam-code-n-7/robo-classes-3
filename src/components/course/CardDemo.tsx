import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ButtonDemo } from "@/demo/ButtonDemo";
import Link from "next/link";
import { cartTypes } from "@/types/CartTypes";

// export interface cardDemoT {
//   cardTitle: string;
//   includes: string;
//   paymentNow: number;
//   prevPayment: string;
//   installmentNow: number;
//   prevInstallment: string;
// }

const CardDemo = ({
  cardTitle,
  includes,
 price,
  prevPayment,
  installmentNow,
  prevInstallment,
}: cartTypes) => {
  return (
    <Card className="w-[500px] h-[380px] flex flex-col relative">
      <div className="absolute top-2 -left-7 w-[400px] py-1 bg-orange-500 text-white  rounded-full flex justify-center mt-2">
        {cardTitle}
      </div>
      <CardContent className="mt-16">
        <div className="flex flex-col gap-2 pb-6">
          <p className="font-extrabold">Includes</p>
          <ul className="list-inside list-disc">
            <li>{includes}</li>
          </ul>
        </div>
        <hr className="w-full border-1 bordre-gray-600 pb-3" />
        <div className="flex flex-row gap-16">
          <div className="flex flex-col justify-between items-center">
            <p>Full payment</p>
            <p className="font-extrabold text-xl">INR {price}</p>
            <p>{prevPayment}</p>
            <Link href={'/cart'}>
            <ButtonDemo
              name="Enroll Now"
              type="button"
              className="py-6 px-7 rounded-3xl border-b-4 border-white bg-sky-500 text-white text-lg shadow-lg mt-2"
            />
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col gap-1 items-center ">
              <div className="border-l border-gray-300 h-16 mx-4" />
              <i className="font-bold">or</i>
              <div className="border-l border-gray-300 h-16 mx-4" />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p>Installment</p>
              <p className="font-extrabold text-xl">INR {installmentNow}</p>
              <p>{prevInstallment}</p>
              <ButtonDemo
                name="Enroll Now"
                type="button"
                className="py-6 px-7 rounded-3xl border-b-4 border-white bg-sky-500 text-lg text-white shadow-lg mt-2"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDemo;
