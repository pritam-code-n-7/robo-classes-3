"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { IND_FLAG } from "@/constants/Images";
import { SlCalender } from "react-icons/sl";
import GradientButton from "./GradientButton";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

const FormSchema = z.object({
  name: z
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
    .optional()
});

export function DialogDemo() {
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
    <Dialog>
      <DialogTrigger asChild>
      <GradientButton name="Free Classes" icon={<SlCalender />} type="button"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] justify-center dark:bg-sky-50 dark:text-black">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 items-center h-auto space-y-2 p-10 rounded-xl "
          >
            <DialogHeader>
              <DialogTitle className="text-4xl">Free Class</DialogTitle>
            </DialogHeader>
            <div className="flex flex-row items-center gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Child Name"
                        {...field}
                        className="w-96 h-14 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                        placeholder="Child's Age"
                        {...field}
                        className="w-96 h-14 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Parent's Email Address"
                        {...field}
                        className="w-96 h-14 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                        placeholder="Parent's Mobile Number"
                        {...field}
                        className="w-96 h-14 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                      />
                    </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="px-8 py-6 shadow-md">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
