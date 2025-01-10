import axios from "axios";
import { useMemo, useState, useEffect } from "react";
import PageButton from "./PageButton";
import { useData, getPaginatorPages } from "../utils/utils";
import ResultsCount from "./ResultsCount";

export default function Paginator() {
  const ITEMS_PER_PAGE = 10;
  const [totalPages, setTotalPages] = useState<number>(1);
  const {
    data: { currentPage, totalRecords, next, prev, goto },
    setData,
  } = useData();
  const [page, setPage] = useState<number>(1);
  const pagesArray = useMemo(
    () => getPaginatorPages(totalPages, currentPage),
    [currentPage, totalPages]
  );

  const gotoPage = async (url: string) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}${url}`).then((response) => {
      setData(response.data);
      setPage(Number(response.data.currentPage));
    });
  };

  useEffect(() => {
    // if the data returned changes, reset page number to 1 and recount total pages
    setPage(1);
    setTotalPages(Math.ceil(totalRecords / ITEMS_PER_PAGE));
  }, [goto]);

  return (
    <div className="flex items-center justify-between">
      <div
        data-testid="paginator"
        className="flex flex-row gap-2 my-4 items-center"
      >
        <PageButton onClick={(e) => gotoPage(prev)} isDisabled={!prev}>
          Prev
        </PageButton>
        {currentPage > 3 ? (
          <>
            <PageButton
              onClick={() => {
                gotoPage(goto.replace("{page}", 1));
              }}
            >
              1
            </PageButton>
            ...
          </>
        ) : null}
        {pagesArray?.map((value) => (
          <PageButton
            key={value}
            onClick={() => {
              gotoPage(goto.replace("{page}", value));
            }}
            isActive={page === value}
          >
            {value}
          </PageButton>
        ))}
        {totalPages - 3 >= currentPage ? (
          <>
            ...
            <PageButton
              onClick={() => {
                gotoPage(goto.replace("{page}", totalPages));
              }}
            >
              {totalPages}
            </PageButton>
          </>
        ) : null}
        <PageButton onClick={() => gotoPage(next)} isDisabled={!next}>
          Next
        </PageButton>
      </div>
      <ResultsCount
        currentPage={currentPage}
        totalRecords={totalRecords}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
}
