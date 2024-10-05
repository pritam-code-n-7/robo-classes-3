import { Input } from "@/components/ui/input";
import { ButtonDemo } from "./ButtonDemo";


export function FooterInput() {
  return (
    <div className="relative w-full rounded-xl">
      <span className="absolute inset-y-0 right-0 flex items-center pr-1 ">
      <ButtonDemo name='Submit' type='button' className="text-xs sm:text-sm md:px-4 sm:px-3 bg-custom-gradient"/>
      </span>
      <Input type="email" placeholder="Enter your email" className="py-6 rounded-lg"/>
    </div>
  );
}
