import axios from "axios";
import { useData } from "../utils/utils";
import { debouncer } from "../../../utils";
import { useMemo } from "react";

export default function Search() {
  const {
    data: { page },
    setData,
  } = useData();

  const search = useMemo(() => {
    return debouncer(1000, (query: string) => {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/file/search/${query}/page/1`)
        .then((response) => {
          setData(response.data);
        });
    });
  }, [setData]);

  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault();
    const query = event.target.value;
    if (query) {
      search(query);
    } else {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/file/page/1`)
        .then((response) => {
          setData(response.data);
        });
    }
  };

  return (
    <input
      type="search"
      className="border-2 w-full h-12 p-2 rounded-md"
      placeholder="Search"
      onChange={handleChange}
    />
  );
}
