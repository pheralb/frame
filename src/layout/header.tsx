import ChangeTheme from "@/components/theme";
import { ExternalLink } from "@/ui";
import { GitHub, Twitter, Droplet } from "iconoir-react";

const iconSize = 20;

const Header = () => {
  return (
    <div className="fixed top-0 w-full pt-6 px-6 flex items-center justify-between text-neutral-400">
      <div className="flex items-center space-x-2">
        <Droplet width={iconSize} />
        <h3 className="font-medium">screenshot</h3>
      </div>
      <div className="flex items-center space-x-5">
        <ExternalLink
          href="https://twitter.com/pheralb_"
          className="text-neutral-900 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-white duration-100 transition-colors"
        >
          <Twitter width={iconSize} />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/pheralb/screenshot"
          className="text-neutral-900 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-white duration-100 transition-colors"
        >
          <GitHub width={iconSize} />
        </ExternalLink>
        <ChangeTheme />
      </div>
    </div>
  );
};

export default Header;
