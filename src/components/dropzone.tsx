import { Dispatch, FunctionComponent, useCallback } from "react";

import { useDropzone } from "react-dropzone";

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
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag & drop some files here, or click to select files</p>
      {isDragAccept && <p>Drop it</p>}
      {isDragReject && <p>Only .png, .jpeg, .jpg, .webp, .svg files are accepted</p>}
    </div>
  );
};

export default Dropzone;
