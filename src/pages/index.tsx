import { useRef, useState } from "react";
import exportAsImage from "@/utils/exportAsImage";
import clsx from "clsx";

import { gradients } from "@/gradients";
import { Button } from "@/ui/button";
import Dropzone from "@/components/dropzone";
import SidebarSection from "@/components/sidebarSection";
import Sidebar from "@/components/sidebar";

import { AddMediaImage, Download } from "iconoir-react";

export default function Home() {
  const [gradient, setGradient] = useState<string>("");
  const getImage = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<File | null>(null);

  const [padding, setPadding] = useState<number>(0);
  const [rounded, setRounded] = useState<number>(0);

  const paddingStyle = `p-[${padding}px]`;
  const roundedStyle = `rounded-[${rounded}px]`;

  console.log(paddingStyle, roundedStyle);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!image ? (
        <Dropzone setFile={setImage} />
      ) : (
        <>
          <Sidebar>
            <SidebarSection>
              <div className="flex flex-col space-y-2">
                <Button
                  wFull
                  icon={<AddMediaImage width={18} stroke="1" />}
                  onClick={() => setImage(null)}
                >
                  New image
                </Button>
                <Button
                  wFull
                  icon={<Download width={18} stroke="1" />}
                  onClick={() =>
                    exportAsImage(getImage.current as HTMLDivElement, "hello")
                  }
                >
                  Download image
                </Button>
              </div>
            </SidebarSection>
            <SidebarSection title="Gradients">
              <div className="flex flex-wrap">
                {gradients.map((gradient) => (
                  <button
                    key={gradient}
                    onClick={() => setGradient(gradient)}
                    className={clsx(
                      "p-4 m-1 rounded-xl hover:-translate-y-0.5 duration-150 transition-all",
                      gradient
                    )}
                  />
                ))}
              </div>
            </SidebarSection>
            <SidebarSection title="Settings">
              <div className="flex flex-col space-y-1 mb-3">
                <label htmlFor="padding">Padding:</label>
                <div className="flex items-center space-x-2 w-full">
                  <input
                    id="padding"
                    type="range"
                    min="0"
                    max="100"
                    value={padding}
                    onChange={(e) => setPadding(parseInt(e.target.value))}
                  />
                  <span className="text-neutral-500">{padding}px</span>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="rounded">Rounded:</label>
                <div className="flex items-center space-x-2 w-full">
                  <input
                    id="rounded"
                    type="range"
                    min="0"
                    max="100"
                    value={rounded}
                    onChange={(e) => setRounded(parseInt(e.target.value))}
                  />
                  <span className="text-neutral-500">{rounded}px</span>
                </div>
              </div>
            </SidebarSection>
          </Sidebar>
          <div className="ml-64 m-3 flex flex-col">
            <div ref={getImage}>
              <div className={clsx(gradient, paddingStyle, roundedStyle)}>
                <img
                  src={URL.createObjectURL(image)}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
