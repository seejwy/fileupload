import { useData } from "../utils/utils";
import DataRow from "./DataRow";
import Paginator from "./Paginator";
import Search from "./Search";

export default function DataTable() {
  const {
    data: { data },
  } = useData();

  return (
    <div className="my-4">
      <Search />
      {data?.length ? (
        <>
          <Paginator />
          <table className="table-fixed w-full [&_*_td]:p-2">
            <thead>
              <tr>
                <td className="w-16 font-bold">ID</td>
                <td className="w-1/5 font-bold">Name</td>
                <td className="w-1/5 font-bold">Email</td>
                <td className="w-full font-bold">Body</td>
              </tr>
            </thead>
            <tbody>
              {data?.map((email: Email) => (
                <DataRow key={email.id} data={email} />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="bg-blue-50 text-center p-4 mt-4 rounded-lg">
          No Data
        </div>
      )}
    </div>
  );
}
