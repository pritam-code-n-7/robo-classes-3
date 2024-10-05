import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface hrefType {
  hrefPrev: string;
  hrefNext: string;
}

export function PaginationDemo({ hrefPrev, hrefNext }: hrefType) {
  return (
    <Pagination>
      <PaginationContent className="flex flex-row justify-between">
        <PaginationItem>
          <PaginationPrevious href={hrefPrev} className='font-bold'/>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={hrefNext} className='font-bold'/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
