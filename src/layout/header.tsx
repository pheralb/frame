import ChangeTheme from "@/components/theme";
import { ExternalLink } from "@/ui";
import { GitHub, Twitter, Combine } from "iconoir-react";
import Link from "next/link";

const iconSize = 20;

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between px-6 pt-6 text-neutral-400">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Combine width={iconSize} />
          <h3 className="font-medium">frame</h3>
          <span className="text-yellow-700">beta</span>
        </div>
      </Link>
      <div className="flex items-center space-x-5">
        <ExternalLink
          href="https://twitter.com/pheralb_"
          className="text-neutral-900 transition-colors duration-100 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
        >
          <Twitter width={iconSize} />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/pheralb/screenshot"
          className="text-neutral-900 transition-colors duration-100 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-white"
        >
          <GitHub width={iconSize} />
        </ExternalLink>
        <ChangeTheme />
      </div>
    </div>
  );
};

export default Header;
