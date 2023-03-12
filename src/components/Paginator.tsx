import React from "react";
import { Pagination } from "react-bootstrap";

interface PaginatorProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow: number = 5;
  let startPage: number = 1;
  let endPage: number = totalPages;
  const pages: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  if (totalPages > pagesToShow) {
    if (currentPage > 3) {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - pagesToShow + 1;
      }
    } else {
      startPage = 1;
      endPage = pagesToShow;
    }
  }

  const visiblePages: number[] = pages.slice(startPage - 1, endPage);

  return (
    <Pagination>
      <Pagination.First disabled={currentPage === 1} onClick={() => onPageChange(1)} />
      <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
      {visiblePages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
      <Pagination.Last
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      />
    </Pagination>
  );
};

export default Paginator;
