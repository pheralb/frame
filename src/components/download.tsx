import { useState } from "react";
import {
  Button,
  Dialog,
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

interface DownloadProps {
  image: React.RefObject<HTMLDivElement>;
}

const DownloadImage = (props: DownloadProps) => {
  const [name, setName] = useState<string>("My image");
  const [filetype, setFiletype] = useState<string>("");

  const handleDownload = () => {
    exportAsImage(props.image.current as HTMLDivElement, name, filetype);
    toast("Downloading image...");
  };

  return (
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
      <div className="mb-3">
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
    </Dialog>
  );
};

export default DownloadImage;
