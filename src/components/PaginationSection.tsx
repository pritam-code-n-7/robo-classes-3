import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

export default function PaginationSection({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: any;
  currentPage: any;
  setCurrentPage: any;
}) {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePrev()} />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={() => handleNext()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
