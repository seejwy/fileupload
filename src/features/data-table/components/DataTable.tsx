import { useEffect, useState } from "react";
import { useData } from "../utils/utils";
import DataRow from "./DataRow";
import Paginator from "./Paginator";
import Search from "./Search";

export default function DataTable() {
  const { data } = useData();
  const [page, setPage] = useState(0);
  const ROWS_PER_PAGE = 10;

  const prev = () => {
    if (page <= 0) return null;
    return () => setPage(page - 1);
  };

  const next = () => {
    if (page * ROWS_PER_PAGE + ROWS_PER_PAGE >= data.length) return null;
    return () => setPage(page + 1);
  };

  useEffect(() => {
    setPage(0);
  }, [data]);

  return (
    <div className="my-4">
      <Search />
      <Paginator prev={prev()} next={next()} />
      {data.length ? (
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data
                .slice(
                  page * ROWS_PER_PAGE,
                  page * ROWS_PER_PAGE + ROWS_PER_PAGE
                )
                .map((email: Email) => <DataRow key={email.id} data={email} />)}
          </tbody>
        </table>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}
