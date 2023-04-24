import { useTheme } from "next-themes";
import { SunLight, HalfMoon } from "iconoir-react";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="text-neutral-900 dark:text-neutral-400 hover:text-dark dark:hover:text-white duration-100 transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunLight width={20} /> : <HalfMoon width={20} />}
    </button>
  );
};

export default ChangeTheme;
