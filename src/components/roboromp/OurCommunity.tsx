'use client'
import {
  FB_LINK,
  INSTA_LINK,
  LINKEDIN_LINK,
  TELIGRAM_LINK,
  YT_LINK,
} from "@/constants/Images";
import { FB_L, IN_L, INSTA_L, YT_L } from "@/constants/links";

import OrganizeCard from "@/demo/roboromp-demo/OrganizeCard";
import React from "react";

const OurCommunity = () => {
  const Data = [
    { id: 1, src: FB_LINK, link: FB_L },
    { id: 2, src: YT_LINK, link: YT_L },
    { id: 3, src: TELIGRAM_LINK, link: "" },
    { id: 4, src: LINKEDIN_LINK, link: IN_L },
    { id: 5, src: INSTA_LINK, link: INSTA_L },
  ];

  return (
    <div className="flex flex-col gap-10 items-center py-28 px-20 bg-[#f0f0f0] dark:bg-black">
      <p className="text-4xl font-bold">Our Community</p>
      <section>
        <div className="flex flex-row items-center gap-2">
          {Data.map((item) => (
            <button key={item.id} onClick={() => window.open(item.link)} >
              <OrganizeCard src={item.src} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurCommunity;
