const Features = dynamic(() => import("@/components/collections/Features"));

import dynamic from "next/dynamic";
import React from "react";

const page = () => {
  return (
    <div>
      <Features />
    </div>
  );
};

export default page;
