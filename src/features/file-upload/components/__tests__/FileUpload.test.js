import { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import FileUpload from "../FileUpload";
import * as utils from "../../../data-table/utils/utils";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

describe("FileUpload", () => {
  beforeEach(() => {
    jest
      .spyOn(utils, "useData")
      .mockReturnValue({ setData: jest.fn(), data: {} });
    jest.spyOn(axios, "post").mockResolvedValue({ data: { success: true } });
    jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: { data: [], totalRecords: 0 } });
  });

  it("renders the file input field", () => {
    render(<FileUpload />);
    const field = screen.getByTestId("file-input-field");
    expect(field).toBeInTheDocument();
  });

  it("renders the upload button", () => {
    render(<FileUpload />);
    const button = screen.getByTestId("file-upload-button");
    expect(button).toBeInTheDocument();
  });

  it("makes a post request on submit", async () => {
    render(<FileUpload />);
    const button = screen.getByTestId("file-upload-button");
    const field = screen.getByTestId("file-input-field");
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    act(() => {
      userEvent.upload(field, file);
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(screen.getByTestId("file-fieldset")).not.toBeDisabled();
    });
  });
});
