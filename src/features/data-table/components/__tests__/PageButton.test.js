import { render, screen, fireEvent } from "@testing-library/react";
import PageButton from "../PageButton";

describe("PageButton", () => {
  it("renders the text on the button", () => {
    render(<PageButton>test</PageButton>);
    const button = screen.getByTestId("page-button");
    expect(button).toHaveTextContent("test");
  });

  it("executes function on click", () => {
    const testFn = jest.fn();
    render(<PageButton onClick={() => testFn()}>test</PageButton>);
    const button = screen.getByTestId("page-button");
    fireEvent.click(button);
    expect(testFn).toHaveBeenCalled();
  });

  it("should be disabled if disabled is true", () => {
    const testFn = jest.fn();
    render(
      <PageButton onClick={() => testFn()} isDisabled={true}>
        test
      </PageButton>
    );
    const button = screen.getByTestId("page-button");
    fireEvent.click(button);
    expect(testFn).toHaveBeenCalledTimes(0);
  });

  it("should be active color if active", () => {
    render(<PageButton isActive={true}>test</PageButton>);
    const button = screen.getByTestId("page-button");
    expect(button).toHaveClass("bg-blue-500 text-white");
  });

  it("should not have active color if not active button", () => {
    render(<PageButton>test</PageButton>);
    const button = screen.getByTestId("page-button");
    expect(button).toHaveClass("bg-white text-blue-500");
  });
});
