import { useRef, useState } from "react";
import { cn, exportAsImage } from "@/utils";
import { toast } from "sonner";

import { gradients } from "@/gradients";
import { Button, Dialog } from "@/ui";

import Dropzone from "@/components/dropzone";
import { Sidebar, SidebarSection } from "@/components/sidebar";
import { ChangePadding, ChangeRounded } from "@/components/settings";
import { AddMediaImage, Download } from "iconoir-react";

import { useImageSettings } from "@/store/settings";

export default function Home() {
  const [gradient, setGradient] = useState<string>("");
  const getImage = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const { padding, rounded } = useImageSettings((state) => ({
    padding: state.padding,
    rounded: state.rounded,
  }));

  const divStyle = {
    padding: `${padding}px`,
    borderRadius: `${rounded}px`,
  };

  const handleDownload = () => {
    exportAsImage(getImage.current as HTMLDivElement, "hello");
    toast("Downloading image...");
  };

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
            <SidebarSection title="Gradients">
              <div className="flex flex-wrap">
                {gradients.map((gradient) => (
                  <button
                    key={gradient}
                    onClick={() => setGradient(gradient)}
                    className={cn(
                      "p-4 m-1 rounded-xl hover:-translate-y-0.5 duration-150 transition-all",
                      gradient
                    )}
                  />
                ))}
              </div>
            </SidebarSection>
            <SidebarSection title="Settings">
              <ChangePadding />
              <ChangeRounded />
            </SidebarSection>
          </Sidebar>
          <div className="ml-64 m-3 flex flex-col">
            <div ref={getImage}>
              <div style={divStyle} className={cn(gradient)}>
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
