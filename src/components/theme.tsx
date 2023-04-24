import { useTheme } from "next-themes";
import { SunLight, HalfMoon } from "iconoir-react";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="text-neutral-900 transition-colors duration-100 hover:text-dark dark:text-neutral-400 dark:hover:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunLight width={20} /> : <HalfMoon width={20} />}
    </button>
  );
};

export default ChangeTheme;
