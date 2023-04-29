import { useRef, useState } from "react";
import { Resizable } from "re-resizable";
import { cn, exportAsImage } from "@/utils";
import { toast } from "sonner";
import { AddMediaImage, Download } from "iconoir-react";

import { gradients } from "@/gradients";
import {
  Input,
  Button,
  Dialog,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextArea,
  ExternalLink,
} from "@/ui";

import Dropzone from "@/components/dropzone";
import { Sidebar, SidebarSection } from "@/components/sidebar";
import { ChangeBgPadding, ChangeBgRounded } from "@/components/settings";

import { useBackgroundSettings } from "@/store/settings";

export default function Home() {
  const [name, setName] = useState<string>("My image");
  const [image, setImage] = useState<File | null>(null);
  const getImage = useRef<HTMLDivElement>(null);

  // Background settings:
  const { padding, rounded, gradient, updateGradient } = useBackgroundSettings(
    (state) => ({
      padding: state.padding,
      rounded: state.rounded,
      gradient: state.gradient,
      updateGradient: state.updateGradient,
    })
  );

  const divStyle = {
    padding: `${padding}px`,
    borderRadius: `${rounded}px`,
  };

  // Editor settings:

  // Download image:
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
                      onClick={() => handleDownload()}
                      className="w-full"
                    >
                      Download
                    </Button>
                  }
                >
                  <form onSubmit={handleDownload}>
                    <label className="text-sm font-medium">File name:</label>
                    <Input
                      className="mt-1 w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value as string)}
                    />
                  </form>
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
                    {gradients.map((gradientColor) => (
                      <button
                        key={gradientColor}
                        onClick={() => updateGradient(gradientColor)}
                        className={cn(
                          "m-1 rounded-xl p-4 transition-all duration-150 hover:-translate-y-[1.25px]",
                          gradientColor,
                          gradient === gradientColor && "ring-2 ring-yellow-800"
                        )}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <TextArea
                    className="mb-1 h-28 font-code"
                    placeholder="Paste your gradient here..."
                    value={gradient}
                    onChange={(e) => updateGradient(e.target.value)}
                  />
                  <p className="text-neutral-400">
                    We are using Tailwind CSS to generate the gradients.{" "}
                    <ExternalLink
                      href="https://tailwindcss.com/docs/gradient-color-stops"
                      underline={true}
                      arrow={true}
                    >
                      Learn more
                    </ExternalLink>
                  </p>
                </TabsContent>
              </Tabs>
            </SidebarSection>
            <SidebarSection title="Background" border={true}>
              <div className="flex flex-col space-y-3">
                <ChangeBgPadding />
                <ChangeBgRounded />
              </div>
            </SidebarSection>
            <SidebarSection title="Editor" border={false}>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="dots" onChange={() => {}} />
                <label htmlFor="dots">Dots</label>
              </div>
            </SidebarSection>
          </Sidebar>
          <div className="m-3 ml-64 flex flex-col">
            <div className="border-2 border-dashed border-neutral-700">
              <div ref={getImage}>
                <Resizable>
                  <div style={divStyle} className={cn(gradient)}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Resizable>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
