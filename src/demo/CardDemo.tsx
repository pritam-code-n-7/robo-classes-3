"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import { COMPUTER, FA_CHILD } from "@/constants/Images";
import { Label } from "@/components/ui/label";
import { featureTypes } from "@/types/Featuretypes";
import { DialogDemo } from "./DialogDemo";
import Link from "next/link";

export function CardDemo({
  course,
  originalPrice,
  overridenPrice,
  emi,
  age,
  classes,
  src,
  label,
  href,
}: featureTypes) {
  const validHref = href || "/";

  return (
    <Card
      className="w-[450px] h-[650px] dark:bg-slate-800/40 relative dark:shadow-none 
     shadow-2xl shadow-pink-200 m-5 mb-16 border-none"
    >
      <div className="w-32 h-10 rounded-b-lg bg-gradient-to-r from-orange-400 to-pink-500 flex justify-center text-white ml-40">
        <p className="mt-1">{classes}</p>
      </div>
      <CardHeader>
        <Image
          src={src}
          alt={"feature-image"}
          height={335}
          width={432}
          className="rounded-xl h-[300px] w-[400px] "
        />
      </CardHeader>
      <CardContent className="gap-2 flex flex-col">
        <Label className="text-sm">{label}</Label>
        <strong className="text-2xl font-extrabold">{course}</strong>
        <strong className="text-xs flex flex-row gap-2 ml-auto mr-8">
          <p className="line-through text-[#aaaa]">{originalPrice}</p>
          <p>{overridenPrice}</p>
        </strong>
        <strong>{emi}</strong>
      </CardContent>
      <CardFooter className="flex flex-row gap-28 absolute bottom-0 text-sm text-slate-600 ">
        <div className="flex flex-col gap-4 items-center ">
          <DialogDemo />
          <div className="flex flex-row gap-2 items-center">
            <Image src={FA_CHILD} alt="child-icon" height={12} width={12} />
            <p>{age}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Link href={validHref}>
            <Button
              variant="outline"
              className="px-6 h-12 hover:bg-zinc-300 dark:hover:bg-black"
            >
              Learn More
            </Button>
          </Link>
          <div className="flex flex-row gap-2 items-center">
            <Image src={COMPUTER} alt="child-icon" height={16} width={16} />
            <p>{classes}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
