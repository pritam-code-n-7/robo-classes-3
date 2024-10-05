
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SEARCH_ICON } from "@/constants/Images";
import Image from "next/image";
import { InputDemo } from "./InputDemo";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button >
          <Image src={SEARCH_ICON} alt="search-icon" width={27} height={27} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-custom-gradient">
        <div>
          <InputDemo />
        </div>
      </PopoverContent>
    </Popover>
  );
}
