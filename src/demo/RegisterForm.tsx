"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { IND_FLAG } from "@/constants/Images";
import { ButtonDemo } from "./ButtonDemo";
import Link from "next/link";

const FormSchema = z.object({
  fName: z.string().min(2, {
    message: "First Name must be at least 2 characters long",
  }),
  lName: z.string().min(2, {
    message: "Last Name must be at least 2 characters long",
  }),
  password: z.string().min(8, {
    message: "password length must be 8",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters",
  }),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-xl h-auto flex flex-col gap-4 p-5 rounded-md
         bg-sky-200/40 items-center ml-96"
      >
        <div className="flex flex-col gap-1 items-center mb-6 text-black">
          <p className="text-4xl font-extrabold">CREATE ACCOUNT</p>
          <p className="text-gray-600">
            Please Register using account detail bellow
          </p>
        </div>
        <FormField
          control={form.control}
          name="fName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="rounded-full border-2 border-sky-500 bg-white py-6 w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="rounded-full border-2 border-sky-500 bg-white py-6 w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="rounded-full border-2 border-sky-500 bg-white py-6 w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Password"
                  {...field}
                  type="password"
                  className="rounded-full border-2 border-sky-500 bg-white py-6 w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center pt-2">
          <ButtonDemo
            name="Create"
            type="submit"
            className="bg-sky-500 text-white rounded-full shadow-md px-8 py-6"
          />
        </div>
        <footer className="flex text-left mt-2">
          <Link
            href="/"
            className="text-base font-bold text-sky-500  hover:text-black"
          >
            Return To Store
          </Link>
        </footer>
      </form>
    </Form>
  );
}
