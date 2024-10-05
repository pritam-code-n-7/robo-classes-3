"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { TRENDING_BLOGS } from "@/constants/links";
import Link from "next/link";

export function BreadcrumbDemo({ title }: alertTypes) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            className=" font-semibold transition-colors hover:text-foreground dark:hover:underline dark:text-black"
            href="/"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link
            className=" font-semibold transition-colors hover:text-foreground dark:hover:underline dark:text-black"
            href={TRENDING_BLOGS}
          >
            Blogs
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className='font-semibold'>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
