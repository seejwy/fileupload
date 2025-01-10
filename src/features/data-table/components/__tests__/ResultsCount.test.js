import { render, screen } from "@testing-library/react";
import ResultsCount from "../ResultsCount";

describe("ResultsCount", () => {
  it("shows the first result number", () => {
    render(
      <ResultsCount currentPage={2} totalRecords={500} itemsPerPage={10} />
    );
    const element = screen.getByTestId("first-record");
    expect(element).toHaveTextContent("11");
  });

  it("shows the last result number", () => {
    render(
      <ResultsCount currentPage={2} totalRecords={500} itemsPerPage={10} />
    );
    const element = screen.getByTestId("last-record");
    expect(element).toHaveTextContent("20");
  });

  it("shows the total results", () => {
    render(
      <ResultsCount currentPage={2} totalRecords={500} itemsPerPage={10} />
    );
    const element = screen.getByTestId("total-record");
    expect(element).toHaveTextContent("500");
  });
});
