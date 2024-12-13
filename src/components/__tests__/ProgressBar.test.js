import { render, screen } from "@testing-library/react";
import ProgressBar from "../ProgressBar";

describe("ProgressBar Component", () => {
  it("progress bar shows the correct progress", () => {
    render(<ProgressBar percProgress={50} />);
    const progressBar = screen.getByTestId("progress-bar-progress");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle("width: 50%");
  });

  it("progress indicator displays the correct percentage", () => {
    render(<ProgressBar percProgress={75} />);
    const percentageText = screen.getByText("75%");
    expect(percentageText).toBeInTheDocument();
  });
});
