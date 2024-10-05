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
import { ButtonDemo } from "../ButtonDemo";
import { Textarea } from "@/components/ui/textarea";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  description: z.string().optional(),
  mobile: z.string().regex(/^\+91\d{10}$/, {
    message: "Mobile must be 10 digit number",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "+91",
      description: "",
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
        className="w-6/7 flex flex-col gap-8 border-t-8 border-orange-500 bg-gray-100 dark:bg-gray-800 dark:text-white items-center h-auto space-y-2 p-10 rounded-xl shadow-md"
      >
        <div className="flex flex-col gap-2 items-center">
          <p className="text-5xl font-bold">Any question / remarks ?</p>
          <p className="text-sm font-bold text-gray-600">
            Write us a line and we will get in touch
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center dark:text-black">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="w-[930px] h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                    placeholder="Email Id"
                    {...field}
                    className="w-[930px] h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                      className="w-[930px] h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type your message here."
                    className="w-[930px] h-[120px] rounded-lg focus:shadow-md border-1 border-sky-500 dark:bg-white dark:text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <ButtonDemo
            name="Submit"
            type="submit"
            className="bg-sky-500 px-10 py-6 text-white rounded-full hover:bg-slate-300 hover:text-sky-500
            transition-all duration-300 delay-75 ease-in-out"
          />
        </div>
      </form>
    </Form>
  );
}
