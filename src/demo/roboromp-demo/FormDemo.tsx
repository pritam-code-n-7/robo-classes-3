"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { IND_FLAG } from "@/constants/Images";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";
import { ButtonDemo } from "../ButtonDemo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Student Name must be at least 2 characters",
  }),
  age: z.string().optional(),
  mobile: z.string().regex(/^\+91\d{10}$/, {
    message: "mobile must be 10 digit number",
  }),
  email: z.string().email({
    message: "email must be at least 2 characters",
  }),
  terms: z.boolean().default(false).optional(),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      mobile: "+91",
      email: "",
      terms: true,
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
        className="w-[540px] h-[530px] space-y-2 p-5 rounded-xl bg-white mt-5
         text-black flex flex-col items-center "
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-5xl font-bold">ROBO ROMP 2024</p>
          <p className="text-xl font-extrabold text-transparent bg-clip-text bg-custom-gradient ">
            Register to participate
          </p>
          <div className="flex flex-row items-center gap-1 my-3">
            <hr className="border-1 border-slate-300 w-20 rounded-lg" />
            <p className="text-md font-extrabold px-2">Enter Your Details</p>
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
                  className="w-[450px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
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
                  <span
                    className="absolute inset-y-0 left-0 flex items-center pl-3"
                  >
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
                    className="pl-10 w-[450px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
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
                  className="w-[450px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
                />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[450px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="6-10">6-10 Years</SelectItem>
                  <SelectItem value="10+">10+ Years</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border-none p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-gray-600">
                I accecpt all terms and conditions.
              </FormLabel>
            </FormItem>
          )}
        />

        <ButtonDemo name="Submit" type="submit" className="w-[450px] " />
      </form>
    </Form>
  );
}
