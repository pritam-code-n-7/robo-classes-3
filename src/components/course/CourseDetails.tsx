import { ButtonDemo } from "@/demo/ButtonDemo";
import { DialogDemo } from "@/demo/DialogDemo";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { FaRegCreditCard } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";

interface courseDetailsT {
  overridenPrice: string;
  price: number;
  installment: string;
  age: string;
  classes: string;
  batchSize: string;
  instruction: string;
  onClick:()=>void;
}

const CourseDetails = ({
  overridenPrice,
  price,
  installment,
  age,
  classes,
  batchSize,
  instruction,
  onClick,
}: courseDetailsT) => {

  

  return (
    <div className="flex flex-col gap-6 items-center p-20 bg-custom-gradient relative text-white ">
      <div className="absolute top-0 right-0 w-36 h-1/4 bg-gray-200/20 rounded-bl-full "></div>
      <div className="flex flex-col text-center gap-2">
        <p className="text-4xl font-bold">Course details</p>
        <p className="text-lg">Quick overview</p>
      </div>
      <div>
        <Card className="w-[1300px] h-[220px] flex flex-col items-center justify-between dark:bg-white dark:text-black dark:border-none">
          <CardContent className="flex flex-row gap-6 mt-10">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-row items-center gap-32">
                <p className="flex flex-row items-center text-gray-600 text-lg">
                  {
                    <FaRegCreditCard
                      size={20}
                      className="text-green-600 mr-2"
                    />
                  }
                  Price
                </p>
                <strong>
                  <i className="text-gray-400 line-through mr-2">
                    {overridenPrice}
                  </i>
                  INR {price}
                </strong>
              </div>
              <div className="flex flex-row items-center gap-20">
                <p className="flex flex-row items-center text-gray-600 text-lg">
                  {<FaChartPie size={20} className="text-green-600 mr-2" />}
                  Installment
                </p>
                <strong>{installment}</strong>
              </div>
            </div>
            <div className="border-l border-gray-300 h-16 mx-4" />
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-row items-center gap-32">
                <p className="flex flex-row items-center text-gray-600 text-lg">
                  {<FaChild size={20} className="text-green-600 mr-2" />}Age
                </p>
                <strong>{age}</strong>
              </div>
              <div className="flex flex-row items-center gap-32">
                <p className="flex flex-row items-center text-gray-600 text-lg">
                  {
                    <FaGraduationCap
                      size={20}
                      className="text-green-600 mr-2"
                    />
                  }
                  Classes
                </p>
                <strong>{classes}</strong>
              </div>
            </div>
            <div className="border-l border-gray-300 h-16 mx-4" />
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-row items-center gap-32">
                <p className="flex flex-row items-center text-gray-600 text-lg">
                  {<IoIosPeople size={20} className="text-green-600 mr-2" />}
                  Batch size
                </p>
                <strong>{batchSize}</strong>
              </div>
              <div className="flex flex-row items-center gap-32">
                <p className="flex flex-row items-center text-gray-600 text-lg">
                  {
                    <GrPersonalComputer
                      size={20}
                      className="text-green-600 mr-2"
                    />
                  }
                  Instruction
                </p>
                <strong>{instruction}</strong>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between" style={{ letterSpacing: "0.05em" }} >
              <ButtonDemo
                name="Take This Course"
                type="button"
                onClick={onClick}
                className="py-6 px-32 bg-cyan-500 rounded-3xl focus:bg-slate-300 font-semibold"
                
              />
          </CardFooter>
        </Card>
      </div>
      <p className="font-bold text-lg">Take a FREE class before your enroll.</p>
      <DialogDemo />
      <div className="absolute bottom-0 left-0 w-36 h-1/4 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default CourseDetails;
