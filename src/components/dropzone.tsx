import clsx from "clsx";
import { Dispatch, FunctionComponent, useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { AddMediaImage } from "iconoir-react";

const Dropzone: FunctionComponent<{ setFile: Dispatch<File> }> = ({
  setFile,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpeg", ".jpg"],
        "image/webp": [".webp"],
        "image/svg+xml": [".svg"],
      },
    });

  return (
    <div
      {...getRootProps()}
      className={clsx(
        "w-screen h-screen",
        "border-2 border-dashed duration-150",
        isDragAccept ? "border-green-800" : "border-neutral-700",
        isDragReject && "border-red-800"
      )}
    >
      <input {...getInputProps()} />
      <div className="flex items-center justify-center w-full h-full cursor-default space-x-2">
        <AddMediaImage width={18} stroke="1" />
        {isDragAccept ? (
          <p>Ready?</p>
        ) : (
          <p>Drag & drop some files here, or click here</p>
        )}
        {isDragReject && (
          <p>Only .png, .jpeg, .jpg, .webp, .svg files are accepted</p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
