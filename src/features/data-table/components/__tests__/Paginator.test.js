import { render, screen } from "@testing-library/react";
import Paginator from "../Paginator";
import * as utils from "../../../data-table/utils/utils";

jest.mock("../ResultsCount", () => () => null);
describe("ResultsCount", () => {
  it("shows the jump to last page", () => {
    jest.spyOn(utils, "useData").mockReturnValue({
      setData: jest.fn(),
      data: { totalRecords: 500, currentPage: 1 },
    });
    render(<Paginator />);
    const paginator = screen.getByTestId("paginator");
    expect(paginator).toHaveTextContent("...50");
  });
  it("shows the jump to first page", () => {
    jest.spyOn(utils, "useData").mockReturnValue({
      setData: jest.fn(),
      data: {
        totalRecords: 500,
        currentPage: 50,
      },
    });
    render(<Paginator />);
    const paginator = screen.getByTestId("paginator");
    expect(paginator).toHaveTextContent("1...");
  });

  it("shows the jump to both first and last page", () => {
    jest.spyOn(utils, "useData").mockReturnValue({
      setData: jest.fn(),
      data: {
        totalRecords: 500,
        currentPage: 20,
      },
    });
    render(<Paginator />);
    const paginator = screen.getByTestId("paginator");
    expect(paginator).toHaveTextContent("1...");
    expect(paginator).toHaveTextContent("...50");
  });

  it("renders prev as disabled when on first page", () => {
    jest.spyOn(utils, "useData").mockReturnValue({
      setData: jest.fn(),
      data: {
        totalRecords: 500,
        currentPage: 1,
      },
    });
    render(<Paginator />);
    const prev = screen.getByText("Prev");
    expect(prev).toBeDisabled();
  });

  it("renders next as disabled when on last page", () => {
    jest.spyOn(utils, "useData").mockReturnValue({
      setData: jest.fn(),
      data: {
        totalRecords: 500,
        currentPage: 50,
      },
    });
    render(<Paginator />);
    const next = screen.getByText("Next");
    expect(next).toBeDisabled();
  });

  it("renders both next and prev as disabled when only 1 page", () => {
    jest.spyOn(utils, "useData").mockReturnValue({
      setData: jest.fn(),
      data: {
        totalRecords: 1,
        currentPage: 1,
      },
    });
    render(<Paginator />);
    const next = screen.getByText("Next");
    const prev = screen.getByText("Prev");
    expect(next).toBeDisabled();
    expect(prev).toBeDisabled();
  });
});
