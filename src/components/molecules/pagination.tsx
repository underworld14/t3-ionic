import ReactPaginate from 'react-paginate';

interface PaginationProps {
  onPageChange: (selectedPage: number) => void;
  pageCount: number;
  page: number;
}

export function Pagination({ onPageChange, pageCount, page }: PaginationProps) {
  return (
    <ReactPaginate
      forcePage={page}
      className="mt-8 flex w-full items-center justify-center gap-2"
      pageClassName="w-9 h-9 flex justify-center items-center hover:bg-[#F2F2F2] hover:cursor-pointer rounded-full"
      activeClassName="bg-primary text-white"
      breakLabel="..."
      nextLabel=">"
      onPageChange={({ selected }) => onPageChange(selected)}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
