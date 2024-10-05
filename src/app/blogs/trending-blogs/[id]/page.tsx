import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PaginationDemo } from "@/demo/PaginationDemo";
import Data from "../blogsData.json";
import { FaComments } from "react-icons/fa6";
import BlogsBanner from "@/components/trending-blogs/BlogsBanner";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const details = Data.find((item) => item.id === Number(id));

  const currentIndex = Data.findIndex((item) => item.id === Number(id));

  const prevPost = Data[currentIndex - 1];
  const nextPost = Data[currentIndex + 1];

  if (!details) {
    return <p>Blog post not found</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-20 pb-10" key={details.id}>
        <BlogsBanner title={details.title} />
        <div className="flex flex-col items-center gap-10 px-20">
          <Image src={details.src} alt="" width={900} height={900} />
          <div className="flex flex-row gap-1 detailss-center text-bold">
            <p className="font-bold">{details.date} - </p>
            <Link
              href={""}
              className="hover:text-sky-600 transition-colors flex flex-row items-center gap-1 font-bold"
            >
              <p>{details.comments}</p>
              <p>COMMENTS</p>
              <FaComments size={20} />
            </Link>
          </div>
          <hr className="border-gray-200 border-1 w-full" />
          <div className="flex flex-col gap-4 text-pretty text-gray-600">
            <p>{details.introduction}</p>
            <ol className="px-10">{details.points}</ol>
            <p className="text-justify">{details.conclusion}</p>
          </div>
          <hr className="border-gray-200 border-1 w-full" />
          <PaginationDemo
            hrefPrev={`/blogs/trending-blogs/${prevPost?.id}`}
            hrefNext={`/blogs/trending-blogs/${nextPost?.id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
