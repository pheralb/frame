"use client";

import clsx from "clsx";
import { Dispatch, FunctionComponent, useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { AddMediaImage, PrivacyPolicy, NavArrowUp } from "iconoir-react";

const Dropzone: FunctionComponent<{ setFile: Dispatch<File> }> = ({
  setFile,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );

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
        <div className="flex flex-col items-center">
          {isDragAccept || isDragReject ? (
            <p className="text-xl">
              {isDragAccept ? "Ready?" : "Only images are allowed"}
            </p>
          ) : (
            <>
              <AddMediaImage
                height={50}
                width={50}
                stroke="1"
                className="mb-3"
              />
              <p className="mb-1 text-xl font-medium">Drop your image</p>
              <p className="mb-3 text-neutral-500 dark:text-neutral-400">
                or click to select from computer
              </p>
              <p>(png, jpeg, webp and svg)</p>
            </>
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
