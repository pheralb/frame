import ChangeTheme from "@/components/theme";
import { ExternalLink } from "@/ui";
import { GitHub, Twitter, Droplet } from "iconoir-react";

const iconSize = 20;

const Header = () => {
  return (
    <div className="fixed top-0 flex w-full items-center justify-between px-6 pt-6 text-neutral-400">
      <div className="flex items-center space-x-2">
        <Droplet width={iconSize} />
        <h3 className="font-medium">screenshot</h3>
      </div>
      <div className="flex items-center space-x-5">
        <ExternalLink
          href="https://twitter.com/pheralb_"
          className="text-neutral-900 transition-colors duration-100 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-white"
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
