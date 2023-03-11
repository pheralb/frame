import { useRef, useState } from "react";

import { IoCloudDownloadOutline } from "react-icons/io5";
import { gradients } from "@/gradients";
import clsx from "clsx";
import { Button } from "@/ui/button";
import Dropzone from "@/components/dropzone";
import exportAsImage from "@/utils/exportAsImage";

export default function Home() {
  const [gradient, setGradient] = useState<string>("");
  const getImage = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!image ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Dropzone setFile={setImage} />
        </div>
      ) : (
        <>
          <div ref={getImage}>
            <div className={clsx("p-12", gradient)}>
              <img
                src={URL.createObjectURL(image)}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="fixed bottom-0 w-full py-8 px-6 flex flex-col space-y-4 items-center justify-center">
            <div className="flex items-center space-x-4 max-w-sm justify-center">
              {gradients.map((gradient) => (
                <button
                  key={gradient}
                  onClick={() => setGradient(gradient)}
                  className={clsx(
                    "p-7 m-2 rounded-xl hover:-translate-y-0.5 duration-150 transition-all",
                    gradient
                  )}
                />
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Button icon={<IoCloudDownloadOutline />}>Generate</Button>
              <Button
                icon={<IoCloudDownloadOutline />}
                onClick={() =>
                  exportAsImage(getImage.current as HTMLDivElement, "hello")
                }
              >
                Generate
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
