"use client";
import {
  FB,
  IN,
  INSTA,
  LOGO,
  STEM,
  VISA,
  X,
  YOUTUBE,
} from "@/constants/Images";
import { FB_L, IN_L, INSTA_L, X_L, YT_L } from "@/constants/links";

import { FooterInput } from "@/demo/FooterInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const Data = [
    { src: IN, alt: "LinkedIn", link: IN_L },
    { src: FB, alt: "FaceBook", link: FB_L },
    { src: INSTA, alt: "InstaGram", link: INSTA_L },
    { src: X, alt: "X", link: X_L },
    { src: YOUTUBE, alt: "YouTube", link: YT_L },
  ];

  const supportData = [
    "Contact us",
    "Refund / cancellation policy",
    "Shipping policy",
    "Terms & conditions",
    "Privacy Policy",
  ];

  return (
    <div
      className="flex flex-row gap-64 bg-custom-gradient pt-20 pb-4 px-32
     text-white relative"
      style={{ letterSpacing: "0.05em" }}
    >
      <div className="absolute top-0 right-0 w-1/6 h-2/6 bg-gray-200/20 rounded-bl-full "></div>

      <div className="flex flex-col gap-8 w-[260px] flex-wrap">
        <div className="flex flex-col gap-6">
          <div>
            <Image src={LOGO} alt="roboclasses-logo" height={104} width={348} />
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Et a egestas viverra orci
            tortor lectus dis nullam dolor. Adipiscing nunc auctor velit
            consectetur diam.
          </p>
        </div>
        <p className="font-semibold text-lg ">Accepted Cards</p>
        <div className="flex flex-col gap-4 mb-8">
          <Image src={VISA} alt="roboclasses-logo" height={40} width={150} />
          <Image src={STEM} alt="roboclasses-logo" height={132} width={180} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Follow us on</p>
          <div className="flex flex-row gap-2 items-center">
            {Data.map((item, index) => (
              <Image
                onClick={() => window.open(item.link)}
                key={index}
                src={item.src}
                alt={item.alt}
                height={25}
                width={25}
                role="button"
              />
            ))}
          </div>
          <p className="text-sm">
            © ISB Edtech FZE - 2024, All rights reserved.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Join Our Community</p>
          <p className="text-sm">Stay upto date on latest trends</p>
          <FooterInput />
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-6 text-sm">
            <p className="text-2xl font-semibold">Company Info</p>
            <Link href={""} className="underline font-semibold">
              About Us
            </Link>
            <div className="flex flex-col gap-1">
              <p>Head Office: ISB Edtech FZE,Business</p>
              <p>Center,Sharjah Publishing City Free Zone,</p>
              <p>Sharjah, United Arab Emirates</p>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href="tel:+971 56 116 9470"
                className="flex flex-row items-center gap-1"
              >
                <b>Phone: </b>
                <p className="hover:underline transition-all">
                  +971 56 116 9470
                </p>
              </Link>
              <Link
                href="tel:+971 56 116 9470"
                className="flex flex-row items-center gap-1"
              >
                <b>Whatsapp: </b>{" "}
                <p className="hover:underline transition-all">
                  +971 56 116 9470
                </p>
              </Link>
              <Link
                href="mailto:support@roboclasses.com"
                className="flex flex-row items-center gap-1"
              >
                <b>Email: </b>
                <p className="hover:underline transition-all">
                  support@roboclasses.com
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold">Support</p>
            <div className="flex flex-col gap-2 text-sm">
              {supportData.map((item) => (
                <div key={item}>
                  <Link href={""} className="hover:underline transition-all">
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-200/20 rounded-tr-full"></div>
    </div>
  );
};

export default Footer;
