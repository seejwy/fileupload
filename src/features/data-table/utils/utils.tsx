import { useContext } from "react";
import { DataContext } from "../../data-table/context/DataContext";

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context not defined");
  }

  return context;
}
