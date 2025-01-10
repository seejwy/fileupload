import { render, screen } from "@testing-library/react";
import ProgressBar from "../ProgressBar";

describe("ProgressBar", () => {
  it("shows the correct progress", () => {
    render(<ProgressBar percProgress={50} />);
    const progressBar = screen.getByTestId("progress-bar-progress");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle("width: 50%");
  });

  it("displays the correct percentage", () => {
    render(<ProgressBar percProgress={75} />);
    const percentageText = screen.getByText("75%");
    expect(percentageText).toBeInTheDocument();
  });
});
