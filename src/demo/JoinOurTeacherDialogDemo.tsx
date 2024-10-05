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
import RoundedButton from "./RoundedButton";

const FormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, { message: "Name is required" }),
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
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(1, { message: "Message is required" }),
});

export function JoinOurTeacherDialogDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      mobile: "+91",
      email: "",
      message: "",
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
    <Dialog>
      <DialogTrigger asChild>
        <RoundedButton
          name="Join Us"
          icon={<SlCalender size={15} />}
          type={"button"}
          className="py-4 px-6 rounded-full bg-sky-500 text-white font-medium hover:bg-white hover:text-sky-500
            shadow-md shadow-gray-300 transition duration-200 delay-300 ease-in-out hover:ring-1 hover:ring-sky-500 flex flex-row items-center"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] justify-center dark:bg-sky-50 dark:text-black">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 items-center h-auto space-y-2 p-10 rounded-xl "
          >
            <DialogHeader>
              <DialogTitle className="text-4xl">Teacher Join</DialogTitle>
            </DialogHeader>
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
                        className="w-96 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                        className="w-96 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                          className="w-96 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Message"
                        {...field}
                        className="w-96 h-32 border-2 border-sky-500 rounded-lg focus:shadow-md bg-white"
                      />
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
