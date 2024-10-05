import { Input } from "@/components/ui/input";
import { SEARCH_ICON } from "@/constants/Images";
import Image from "next/image";

export function InputDemo() {
  return (
    <div className="relative w-full rounded-xl">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
        <Image src={SEARCH_ICON} alt="search-icon"  width={27} height={27}/>
      </span>
      <Input type="email" placeholder="search" className="pl-10 bg-[#F0F0F0]"/>
    </div>
  );
}
