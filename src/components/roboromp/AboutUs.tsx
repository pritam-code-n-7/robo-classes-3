import React from "react";

const AboutUs = ({ src }: { src: string }) => {
  return (
    <div className="flex flex-row justify-between px-20 py-20 text-white bg-custom-gradient relative">
      <div className="absolute top-0 right-0 w-24 h-1/6 bg-gray-200/20 rounded-bl-full "></div>
      <div className="flex flex-col gap-8 justify-center mt-10">
        <p className="text-4xl font-bold">About Robo Classes</p>
        <p className="w-[650px]" style={{ letterSpacing: "0.05em" }}>
          Today, <b className="text-lg">in the 21st century</b>, not all schools
          teach futuristic skills and analytical thinking despite research
          indicating early years as the turning point where kids can learn any
          new skills. We are here to{" "}
          <b className="text-lg"> solve this major gap</b> in the requirements
          of the future. <b className="text-lg"> We prepare K12 kids </b> to
          learn Robotics, coding, STEM skills and prepare them for the next-gen
          challanges.
        </p>
      </div>
      <div>
        <iframe
          src={src}
          allowFullScreen
          width={400}
          height={400}
          sandbox="allow-popups allow-scripts allow-same-origin"
          loading="lazy"
          className="w-[620px] h-[350px] rounded-sm"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-1/6 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default AboutUs;
