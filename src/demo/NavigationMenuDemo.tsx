"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  PROGRAMMING_COURSES,
  ROBOTICS_COURSES,
  STEM_CLASSES,
} from "@/constants/links";

const courses: { title: string; href: string }[] = [
  {
    title: "Robotics Courses",
    href: ROBOTICS_COURSES,
  },
  {
    title: "Programming Courses",
    href: PROGRAMMING_COURSES,
  },
  {
    title: "STEM Classes",
    href: STEM_CLASSES,
  },
];

const aboutUs: { title: string; href: string }[] = [
  {
    title: "What's Trending",
    href: "/blogs/trending-blogs",
  },
  {
    title: "Community",
    href: "/pages/community",
  },
  {
    title: "Coding and Robotics Courses",
    href: "/pages/coding-and-robotics-courses",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="text-md text-gray-500 dark:text-slate-400" style={{ letterSpacing: "0.10em", }}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><b> Courses</b></NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[900px]">
              {courses.map((course) => (
                <Link href={course.href} key={course.title}>
                  <ListItem title={course.title} />
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/homeschooling" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             <b>Homeschooling</b>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/school-college-enquiry" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             <b> School/College enquiry</b>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><b> About us</b></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[900px]">
              {aboutUs.map((about) => (
                <Link href={about.href} key={about.title}>
                  <ListItem title={about.title} />
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
           <b>Contact us</b>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><b> Exsisting student </b></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[900px] text-right">
              <ListItem title="My Account" href={""} />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-l from-lime-500 to-cyan-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
