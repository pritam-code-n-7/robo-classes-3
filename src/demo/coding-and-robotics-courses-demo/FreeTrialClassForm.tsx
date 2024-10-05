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
import BlueButton from "../BlueButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { FREE, HOMESCHOOLING_FORM, IND_FLAG } from "@/constants/Images";
import { ButtonDemo } from "../ButtonDemo";

const FormSchema = z.object({
  studentName: z
    .string({
      required_error: "Student name is required",
    })
    .min(1, { message: "Student name is required" }),
  email: z
    .string({
      required_error: "Email address is required",
    })
    .min(1, { message: "Email address is required" }),
  mobile: z
    .string({
      required_error: "Mobile is required",
    })
    .regex(/^\+91\d{10}$/, {
      message: "mobile must be 10 digit number.",
    }),
  age: z
    .string({
      required_error: "Age group is required",
    })
    .min(1, { message: "Age group is required" }),
});

export function FreeTrialClassForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      studentName: "",
      mobile: "+91",
      email: "",
      age: "",
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
        className="w-5/6 flex flex-row gap-16 bg-gray-100 dark:bg-gray-800 dark:text-white items-center h-auto space-y-2 p-10 rounded-xl shadow-md"
      >
        <div>
          <Image src={FREE} alt="free class image" height={239} width={277} />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-5xl font-bold mb-5">
            Register for a Free trial class
          </p>
          <div className="flex flex-row items-center gap-4">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Student's Name"
                      {...field}
                      className="w-80 h-12 border-2 bg-white border-sky-500 rounded-full focus:shadow-md"
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
                      placeholder="Email Address"
                      {...field}
                      className="w-80 h-12 border-2 bg-white border-sky-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-full ">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <Image
                          src={IND_FLAG}
                          alt="indian-flag"
                          width={20}
                          height={20}
                        />
                      </span>
                      <Input
                        placeholder="Contact Number"
                        {...field}
                        className="w-80 h-12 border-2 bg-white border-sky-500 rounded-full focus:shadow-md"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Student's Age"
                      {...field}
                      className="w-80 h-12 border-2 bg-white border-sky-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center pt-2">
            <ButtonDemo
              name="Submit"
              type="button"
              className="px-6 py-2 bg-sky-500 text-white rounded-xl
            hover:bg-slate-300 hover:text-sky-500 transition-all duration-300 delay-75 ease-in-out"
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
