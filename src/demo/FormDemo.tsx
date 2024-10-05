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
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FormSchema = z.object({
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

export function FormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      mobile: "+91",
      email: "",
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
        className="w-[400px] h-[530px] space-y-2 p-5 rounded-xl bg-[#F0F0F0] mt-5
         text-black flex flex-col items-center "
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">Enquire Now</p>
          <p className="text-xs font-semibold text-gray-600 " style={{ letterSpacing: "0.05em" }} >Learn from our best teachers</p>
          <div className="flex flex-row items-center gap-1">
            <hr className="border-1 border-slate-300 w-16 rounded-lg" />
            <p className="text-md font-extrabold text-transparent bg-clip-text bg-custom-gradient ">Select the session mode</p>
            <hr className="border-1 border-slate-300 w-16 rounded-lg" />
          </div>
          <Tabs className='mt-2' defaultValue="offline">
          <TabsList className="grid w-[345px] grid-cols-2 bg-custom-gradient text-gray-600 ">
            <TabsTrigger value="online">Online</TabsTrigger>
            <TabsTrigger value="offline">Offline</TabsTrigger>
          </TabsList>
          </Tabs>
          <div className="flex flex-row items-center gap-1">
            <hr className="border-1 border-slate-300 w-20 rounded-lg" />
            <p className="text-md font-semibold px-2">Enter Your Details</p>
            <hr className="border-1 border-slate-300 w-20 rounded-lg" />
          </div>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Student Name"
                  {...field}
                  className="w-[340px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm bg-white"
                />
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
                  placeholder="Age"
                  {...field}
                  className="bg-white w-[340px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
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
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
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
                    className="bg-white pl-10 w-[340px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
                  />
                </div>
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
                  className="bg-white w-[340px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      
          <ButtonDemo name="Submit" type="submit" className="w-[340px]"/>
     
      </form>
    </Form>
  );
}
