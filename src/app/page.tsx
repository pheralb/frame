"use client";

import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Resizable } from "re-resizable";
import { cn } from "@/utils";
import { AddMediaImage } from "iconoir-react";

import { useBackgroundSettings } from "@/store/background";
import { useImageSettings } from "@/store/image";

import { gradients } from "@/gradients";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextArea,
  ExternalLink,
} from "@/ui";

import Dropzone from "@/components/dropzone";
import { Sidebar, SidebarSection } from "@/components/sidebar";
import {
  ChangeBgPadding,
  ChangeBgRounded,
} from "@/components/backgroundSettings";
import { ChangeImgRounded } from "@/components/imageSettings";
import DownloadImage from "@/components/download";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const getImage = useRef<HTMLDivElement>(null);

  // Shortcuts:
  useHotkeys(
    "ctrl+a",
    () => {
      setImage(null);
    },
    { preventDefault: true }
  );

  // Background settings:
  const { padding, bgRounded, gradient, updateGradient } =
    useBackgroundSettings((state) => ({
      padding: state.padding,
      bgRounded: state.rounded,
      gradient: state.gradient,
      updateGradient: state.updateGradient,
    }));

  const { imgRounded } = useImageSettings((state) => ({
    imgRounded: state.rounded,
  }));

  const backgroundStyle = {
    padding: `${padding}px`,
    borderRadius: `${bgRounded}px`,
    width: "100%",
    height: "100%",
  };

  const imageStyle = {
    borderRadius: `${imgRounded}px`,
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
                <DownloadImage image={getImage} />
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
            <SidebarSection title="Image" border={false}>
              <div className="flex flex-col space-y-3">
                <ChangeImgRounded />
              </div>
            </SidebarSection>
          </Sidebar>
          <div className="m-3 ml-64 flex flex-col">
            <div className="border-2 border-dashed border-neutral-700">
              <div ref={getImage} className="bg-transparent">
                <Resizable className="bg-transparent">
                  <div className={cn(gradient)} style={backgroundStyle}>
                    <img
                      style={imageStyle}
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
