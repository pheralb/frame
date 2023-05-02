import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";
import { Settings } from "iconoir-react";
import { useHotkeys } from "react-hotkeys-hook";
import { useTheme } from "next-themes";

const SettingsDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const className =
    "text-dark transition-colors duration-100 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200";

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
        <Settings height={20} className={className} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Select defaultValue={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light (beta)</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
