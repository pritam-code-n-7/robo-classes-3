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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { IND_FLAG } from "@/constants/Images";
import { ButtonDemo } from "../ButtonDemo";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Student Name must be at least 2 characters",
  }),
  age: z.string().optional(),
  description: z.string().optional(),
  mobile: z.string().regex(/^\+91\d{10}$/, {
    message: "mobile must be 10 digit number",
  }),
  email: z.string().email({
    message: "email must be at least 2 characters",
  }),
});

type formTypes = {
  src: string;
  title: string;
};

export function HomeSchoolingFormDemo({ src, title }: formTypes) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      mobile: "+91",
      email: "",
      age: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));
      form.reset();
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
        variant: "default",
      });
    } catch (error) {
      console.error("Failed to submit data", error);
      toast({
        title: "Submission Failed",
        description: "There was an issue submitting the enquiry form.",
        variant: "destructive",
      });
    }
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 flex flex-row border-t-8 border-orange-500
         gap-16 bg-gray-100 dark:bg-gray-800 dark:text-white items-center h-auto space-y-2 p-10 rounded-xl shadow-md"
      >
        <div>
          <Image src={src} alt="homeschooling-image" height={444} width={444} />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-4xl font-bold mb-5">{title}</p>
          <div className="flex flex-row items-center gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Student's Name"
                      {...field}
                      className="w-80 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                      className="w-80 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                        placeholder="Mobile Number"
                        {...field}
                        className="w-80 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"age"}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-80 h-12 border-2 border-sky-500 rounded-full ">
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="6-9">6-9 Years</SelectItem>
                      <SelectItem value="9-12">9-12 Years</SelectItem>
                      <SelectItem value="12+">12+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center pt-2">
            <ButtonDemo
              name="Submit"
              type="submit"
              className="px-6 py-2 bg-sky-500 text-white rounded-xl
            hover:bg-slate-300 hover:text-sky-500 transition-all duration-300 delay-75 ease-in-out"
            />{" "}
          </div>
        </div>
      </form>
    </Form>
  );
}
