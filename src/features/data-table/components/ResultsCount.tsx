export default function ResultsCount({
  currentPage,
  totalRecords,
  itemsPerPage,
}: {
  currentPage: number;
  totalRecords: number;
  itemsPerPage: number;
}) {
  return (
    <div>
      Showing{" "}
      <span data-testid="first-record">
        {(currentPage - 1) * itemsPerPage + 1}
      </span>{" "}
      to{" "}
      <span data-testid="last-record">
        {currentPage * itemsPerPage > totalRecords
          ? totalRecords
          : currentPage * itemsPerPage}{" "}
      </span>
      of <span data-testid="total-record">{totalRecords}</span>
    </div>
  );
}
