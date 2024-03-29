import React from "react";
import ReactPaginate from "react-paginate";
import "../../../css/Pagination.css"; // 스타일 파일을 추가합니다.

const Pagination = ({ pageCount, onPageChange }) => {
  const handlePageChange = (selected) => {
    onPageChange(selected);
  };

  return (
    <ReactPaginate
      previousLabel={"이전"}
      nextLabel={"다음"}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
};

export default Pagination;
