"use client";
import React from "react";
import { LOGO } from "@/constants/Images";
import "swiper/css";
import OrganizeCard from "@/demo/roboromp-demo/OrganizeCard";

const Organize = () => {
  const Data = [
    { id: 1, src: LOGO },
    { id: 2, src: LOGO },
    { id: 3, src: LOGO },
    { id: 4, src: LOGO },
  ];

  return (
    <div className="flex flex-col gap-10 items-center p-20 bg-custom-gradient text-white">
      <p className="text-4xl font-bold">Organizers & Collaborators</p>
      <section>
        <div className="flex flex-row items-center gap-10">
          {Data.map((item) => (
            <OrganizeCard src={item.src} key={item.id}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Organize;
