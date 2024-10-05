"use client";
import { JOIN } from "@/constants/Images";
import { JoinOurTeacherDialogDemo } from "@/demo/JoinOurTeacherDialogDemo";
import Image from "next/image";
import React from "react";

const JoinOurTeacherCard = () => {
  return (
    <div
      className="p-14 px-20 bg-slate-200 font-montserrat shadow-md border-none rounded-lg h-auto w-full  text-black 
    flex gap-20 mt-5"
    >
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-bold text-3xl">Teachers join our team</p>
        </div>
        <div
          className="font-semibold text-sm text-neutral-700"
          style={{ letterSpacing: "0.05em" }}
        >
          <p style={{ letterSpacing: "0.05em" }}>
            We are always looking for good teachers. Send us your details along
            with you CV
          </p>
          <p style={{ letterSpacing: "0.05em" }}>
            and we will get in touch with you.
          </p>
        </div>
        <div>
          <JoinOurTeacherDialogDemo />
        </div>
      </div>
      <div>
        <Image
          src={JOIN}
          alt="teacher-image"
          width={150}
          height={150}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default JoinOurTeacherCard;
