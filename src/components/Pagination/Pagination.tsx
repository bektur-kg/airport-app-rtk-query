import React, {FC} from 'react'
import ReactPaginate from "react-paginate"
import cls from './Pagination.module.scss'

interface IPaginationProps {
  pageCount: number
  onClick: (pageNumber: {selected: number}) => void
  currentPage: number
}

const Pagination: FC<IPaginationProps> = (
  {
    pageCount,
    onClick,
    currentPage
  }) => {


  return (
    <ReactPaginate
      className={cls.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={onClick}
      pageRangeDisplayed={5}
      forcePage={currentPage! - 1}
      pageCount={pageCount!}
      previousLabel="<"
      nextClassName={cls.next}
      previousClassName={cls.prev}
      pageClassName={cls.pages}
      activeClassName={cls.activePage}
    />
  )
}

export default Pagination
