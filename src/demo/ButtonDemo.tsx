import { Button } from "@/components/ui/button";
import { ButtonTypes } from "@/types/ButtonTypes";

export function ButtonDemo({ name, type, onClick, className }: ButtonTypes) {
  return (
    <Button type={type} onClick={onClick} className={className}>
      {name}
    </Button>
  );
}
