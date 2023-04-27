import { useRef, useState } from "react";
import { cn, exportAsImage } from "@/utils";
import { toast } from "sonner";
import { AddMediaImage, Download } from "iconoir-react";

import { gradients } from "@/gradients";
import { Button, Dialog, Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui";

import Dropzone from "@/components/dropzone";
import { Sidebar, SidebarSection } from "@/components/sidebar";
import {
  ChangeBgPadding,
  ChangeBgRounded,
  ChangeBgShadow,
  ChangeBgShadowColor,
} from "@/components/settings";

import { useBackgroundSettings, useImageSettings } from "@/store/settings";

export default function Home() {
  const [gradient, setGradient] = useState<string>("");
  const [name, setName] = useState<string>("");
  const getImage = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<File | null>(null);

  // Background settings:
  const { padding, rounded, shadow, shadowColor } = useBackgroundSettings(
    (state) => ({
      padding: state.padding,
      rounded: state.rounded,
      shadow: state.shadow,
      shadowColor: state.shadowColor,
    })
  );

  const divStyle = {
    padding: `${padding}px`,
    borderRadius: `${rounded}px`,
    boxShadow: `${shadow ? `0 0 ${shadow} ${shadowColor}` : "none"}`,
  };

  // Image settings:
  const { height } = useImageSettings((state) => ({
    height: state.height,
  }));

  const imgSize = {
    height: `${height}px`,
  };

  const handleDownload = () => {
    exportAsImage(getImage.current as HTMLDivElement, name);
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
                  icon={<AddMediaImage width={18} stroke="1" />}
                  onClick={() => setImage(null)}
                  loadingText="Loading..."
                >
                  New image
                </Button>
                <Dialog
                  title="Export image"
                  btnIcon={<Download width={18} stroke="1" />}
                  btnText="Export image"
                  action={
                    <Button
                      icon={<Download width={18} stroke="1" />}
                      onClick={handleDownload}
                      className="w-full"
                    >
                      Download
                    </Button>
                  }
                >
                  asdas
                </Dialog>
              </div>
            </SidebarSection>
            <SidebarSection title="Gradients" border={true}>
              <Tabs defaultValue="gallery" className="w-full">
                <TabsList>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="gallery">
                  <div className="flex flex-wrap items-center justify-center">
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
                </TabsContent>
                <TabsContent value="code">
                  <textarea
                    className="h-32 w-full rounded-xl bg-gray-100 p-2 dark:bg-gray-800"
                    placeholder="Paste your gradient here..."
                    value={gradient}
                    onChange={(e) => setGradient(e.target.value)}
                  />
                </TabsContent>
              </Tabs>
            </SidebarSection>
            <SidebarSection title="Background" border={false}>
              <div className="flex flex-col space-y-3">
                <ChangeBgPadding />
                <ChangeBgRounded />
                <ChangeBgShadow />
                <ChangeBgShadowColor />
              </div>
            </SidebarSection>
          </Sidebar>
          <div className="m-3 ml-64 flex flex-col">
            <div ref={getImage}>
              <div style={divStyle} className={cn(gradient)}>
                <img
                  src={URL.createObjectURL(image)}
                  alt="image"
                  className="h-full w-full object-cover"
                  style={imgSize}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
