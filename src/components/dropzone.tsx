"use client";

import clsx from "clsx";
import { Dispatch, FunctionComponent, useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { AddMediaImage, PrivacyPolicy } from "iconoir-react";

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
        "h-screen w-screen",
        "border-2 border-dashed duration-150",
        isDragAccept ? "border-green-800" : "border-neutral-700",
        isDragReject && "border-red-800"
      )}
    >
      <input {...getInputProps()} />
      <div className="flex h-full w-full cursor-default flex-col items-center justify-center space-y-3">
        <div className="flex flex-col items-center space-y-4 text-xl">
          <AddMediaImage height={50} width={50} stroke="1" />
          {isDragAccept || isDragReject ? (
            <p>{isDragAccept ? "Ready?" : "Only images are allowed"}</p>
          ) : (
            <p>Drop your image here or click here</p>
          )}
        </div>
        <div className="fixed bottom-0 flex items-center space-x-2 pb-4 text-neutral-500">
          <PrivacyPolicy width={18} stroke="1" />
          <p>frame does not send your image to a server.</p>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
