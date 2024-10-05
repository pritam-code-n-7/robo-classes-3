import { EnquiryFormDemo } from "@/demo/enquiry-demo/EnquiryFormDemo";
import React from "react";

const BulkEnquiry = () => {
  return (
    <div className="flex flex-col gap-12 justify-center pb-20 px-20">
      <div className="flex flex-col gap-2 ">
        <p className="text-4xl font-extrabold">School/University (bulk) enquiry</p>
        <p className="text-sm font-bold text-gray-600">Write us a line and we will get in touch</p>
      </div>
      <EnquiryFormDemo />
    </div>
  );
};

export default BulkEnquiry;
