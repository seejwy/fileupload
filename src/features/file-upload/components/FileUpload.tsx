import { FormEvent, useState } from "react";
import axios, { AxiosResponse } from "axios";
import ProgressBar from "../../../components/ProgressBar";
import { getData, useData } from "../../data-table/utils/utils";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { setData } = useData();

  const handleChange = (event: FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files?.length) {
      setProgress(0);
      setFile(event.currentTarget.files[0]);
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    if (file) formData.append("file", file);
    const response: AxiosResponse<Email[]> = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/file/upload`,
      formData,
      {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentageComplete = Number(
            ((loaded / total) * 100).toFixed(2)
          );
          setProgress(percentageComplete);
        },
      }
    );
    setData(await getData(1));
    setIsUploading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border-2 rounded-lg"
    >
      <fieldset
        data-testid="file-fieldset"
        disabled={isUploading}
        className="flex flex-row gap-4 disabled:opacity-50"
      >
        <input
          required
          data-testid="file-input-field"
          type="file"
          name="file"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
        />
        <input
          data-testid="file-upload-button"
          type="submit"
          value="Upload"
          className="bg-blue-500 text-white py-2 px-4 cursor-pointer"
        />
      </fieldset>
      {(isUploading || progress >= 100) && (
        <ProgressBar percProgress={progress} />
      )}
    </form>
  );
}
