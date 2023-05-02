import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui";
import { Settings } from "iconoir-react";
import { useHotkeys } from "react-hotkeys-hook";

const SettingsDialog = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Shortcuts:
  useHotkeys(
    "ctrl+y",
    () => {
      setOpen(true);
    },
    { preventDefault: true }
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Settings
          height={20}
          className="text-neutral-400 transition-colors duration-100 hover:text-neutral-200"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
