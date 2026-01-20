import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

const UsePagination = () => {
  return (
    <Pagination className="">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="transition-all duration-300 hover:border !p-5 text-xl font-medium"
          />
        </PaginationItem>
        <PaginationItem className="">
          <PaginationLink
            href="#"
            className="!text-white !p-5 bg-[#1680fb] hover:bg-[#185abd] transition-all duration-300 text-xl font-semibold"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="transition-all duration-300 hover:border !p-5 text-xl font-semibold !text-martex-light_text"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="transition-all duration-300 hover:border !p-5 text-xl font-semibold !text-martex-light_text"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="transition-all duration-300 hover:border !p-5 text-xl font-medium"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default UsePagination;
