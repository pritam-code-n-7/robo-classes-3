import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { selectTypes } from "@/types/SelectTypes"

export function SelectDemo({onValueChange, placeholdar, value, name,selectLable}:selectTypes) {
  return (
    <div className="w-72 px-12">
    <Select onValueChange={onValueChange} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholdar} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLable}</SelectLabel>
          <SelectItem value={value}>{name}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
