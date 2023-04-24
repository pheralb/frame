import { useTheme } from "next-themes";
import { SunLight, HalfMoon } from "iconoir-react";
import { cn } from "@/utils";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={cn(
        "text-neutral-900 transition-colors duration-100 dark:text-neutral-400",
        theme === "dark"
          ? "dark:hover:text-yellow-400"
          : "hover:text-indigo-900"
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunLight width={20} /> : <HalfMoon width={20} />}
    </button>
  );
};

export default ChangeTheme;
