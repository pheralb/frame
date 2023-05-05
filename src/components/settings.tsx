"use client";

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
  ExternalLink,
} from "@/ui";
import { Settings, Heart } from "iconoir-react";
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

  useHotkeys(
    "ctrl+l",
    () => {
      setTheme(theme === "dark" ? "light" : "dark");
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
          <div className="flex flex-col space-y-1 border-b border-neutral-300 pb-3 dark:border-neutral-800">
            <label htmlFor="theme">Theme:</label>
            <Select defaultValue={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-full" id="theme">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light (beta)</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1 border-b border-neutral-300 pb-3 dark:border-neutral-800">
            <label htmlFor="shortcuts">Shortcuts:</label>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="border-b bg-neutral-300 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Shortcut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      New image
                    </th>
                    <td className="px-6 py-4 font-code">
                      <kbd>Ctrl</kbd> + <kbd>a</kbd>
                    </td>
                  </tr>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Export image
                    </th>
                    <td className="px-6 py-4 font-code">
                      <kbd>Ctrl</kbd> + <kbd>s</kbd>
                    </td>
                  </tr>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Change theme
                    </th>
                    <td className="px-6 py-4 font-code">
                      <kbd>Ctrl</kbd> + <kbd>l</kbd>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-1 text-xs text-neutral-300">
            <Heart height={14} className="text-red-400" />
            <span>Built by</span>
            <ExternalLink
              href="https://twitter.com/pheralb_"
              underline={true}
              arrow={true}
            >
              pheralb
            </ExternalLink>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
