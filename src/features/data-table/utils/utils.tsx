import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../data-table/context/DataContext";

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context not defined");
  }

  return context;
}

export async function getData(page: number, query?: string) {
  const url = `${process.env.REACT_APP_SERVER_URL}/file/page/${page}${
    query ? `/search/${query}` : ""
  }`;
  const response = await axios.get(url);
  return response.data;
}

export function getPaginatorPages(totalPages: number, currentPage: number) {
  const MAX_PAGES_SHOWN = 5;
  if (!totalPages || !currentPage) return;

  if (totalPages > MAX_PAGES_SHOWN) {
    const page = Number(currentPage);
    if (page <= 3) {
      return [1, 2, 3, 4, 5];
    }
    if (page + 2 >= totalPages) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [page - 2, page - 1, page, page + 1, page + 2];
  }
  return [...Array(totalPages)].map((_, i) => i + 1);
}
