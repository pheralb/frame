import { useRef, useState } from "react";
import { cn, exportAsImage } from "@/utils";
import { toast } from "sonner";

import { gradients } from "@/gradients";
import { Button, Dialog } from "@/ui";

import Dropzone from "@/components/dropzone";
import { Sidebar, SidebarSection } from "@/components/sidebar";
import {
  ChangeBgPadding,
  ChangeBgRounded,
  ChangeImgSize,
} from "@/components/settings";
import { AddMediaImage, Download } from "iconoir-react";

import { useBackgroundSettings, useImageSettings } from "@/store/settings";

export default function Home() {
  const [gradient, setGradient] = useState<string>("");
  const getImage = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<File | null>(null);

  // Background settings:
  const { padding, rounded } = useBackgroundSettings((state) => ({
    padding: state.padding,
    rounded: state.rounded,
  }));

  const divStyle = {
    padding: `${padding}px`,
    borderRadius: `${rounded}px`,
  };

  // Image settings:
  const { size } = useImageSettings((state) => ({
    size: state.size,
  }));

  const imgSize = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const handleDownload = () => {
    exportAsImage(getImage.current as HTMLDivElement, "hello");
    toast("Downloading image...");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {!image ? (
        <Dropzone setFile={setImage} />
      ) : (
        <>
          <Sidebar>
            <SidebarSection border={true}>
              <div className="flex flex-col space-y-2">
                <Button
                  wFull
                  icon={<AddMediaImage width={18} stroke="1" />}
                  onClick={() => setImage(null)}
                >
                  New image
                </Button>
                <Dialog
                  title="Download image"
                  btnIcon={<Download width={18} stroke="1" />}
                  btnText="Download"
                  action={
                    <Button
                      wFull
                      icon={<Download width={18} stroke="1" />}
                      onClick={handleDownload}
                    >
                      Download image
                    </Button>
                  }
                >
                  asdas
                </Dialog>
              </div>
            </SidebarSection>
            <SidebarSection title="Gradients" border={true}>
              <div className="flex flex-wrap">
                {gradients.map((gradient) => (
                  <button
                    key={gradient}
                    onClick={() => setGradient(gradient)}
                    className={cn(
                      "m-1 rounded-xl p-4 transition-all duration-150 hover:-translate-y-0.5",
                      gradient
                    )}
                  />
                ))}
              </div>
            </SidebarSection>
            <SidebarSection title="Background" border={true}>
              <ChangeBgPadding />
              <ChangeBgRounded />
            </SidebarSection>
            <SidebarSection title="Image">
              <ChangeImgSize />
            </SidebarSection>
          </Sidebar>
          <div className="m-3 ml-64 flex flex-col">
            <div ref={getImage}>
              <div style={divStyle} className={cn(gradient)}>
                <img
                  src={URL.createObjectURL(image)}
                  alt="image"
                  style={imgSize}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
