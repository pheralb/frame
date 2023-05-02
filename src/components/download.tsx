import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";
import { Download } from "iconoir-react";
import { exportAsImage } from "@/utils";
import { toast } from "sonner";
import { useHotkeys } from "react-hotkeys-hook";

interface DownloadProps {
  image: React.RefObject<HTMLDivElement>;
}

const DownloadImage = (props: DownloadProps) => {
  const [name, setName] = useState<string>("My image");
  const [filetype, setFiletype] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleDownload = () => {
    exportAsImage(props.image.current as HTMLDivElement, name, filetype);
    toast("Downloading image...");
  };

  // Shortcuts:
  useHotkeys(
    "ctrl+s",
    () => {
      setOpen(true);
    },
    { preventDefault: true }
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button icon={<Download width={18} stroke="1" />} className="w-full">
          Export image
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export image</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <label htmlFor="filename" className="text-sm font-medium">
            Name:
          </label>
          <Input
            id="filename"
            className="mt-1 w-full"
            value={name}
            onChange={(e) => setName(e.target.value as string)}
            placeholder="My image"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fileformat" className="text-sm font-medium">
            Image format:
          </label>
          <Select onValueChange={setFiletype} defaultValue="image/png">
            <SelectTrigger className="mt-1 w-full">
              <SelectValue placeholder="File type" />
            </SelectTrigger>
            <SelectContent id="fileformat">
              <SelectItem value="image/png" defaultChecked>
                .png
              </SelectItem>
              <SelectItem value="image/jpeg">.jpeg</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogClose>
          <Button
            icon={<Download width={18} stroke="1" />}
            onClick={() => handleDownload()}
            className="w-full"
          >
            Download image
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadImage;
