import Logo from "@/components/logo";
import SettingsDialog from "@/components/settings";
import { ExternalLink } from "@/ui";
import { GitHub, Twitter, Combine } from "iconoir-react";
import Link from "next/link";

const iconSize = 20;
const className =
  "text-dark transition-colors duration-100 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200";

const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex w-full items-center justify-between px-6 pt-6 text-dark dark:text-neutral-400">
      <Link href="/">
        <div className="flex items-center space-x-2 dark:text-logo">
          <Logo width={iconSize} />
          <h3 className="font-medium">frame</h3>
          <span className="text-yellow-700">beta</span>
        </div>
      </Link>
      <div className="flex items-center space-x-5">
        <SettingsDialog />
        <ExternalLink href="https://twitter.com/pheralb_" className={className}>
          <Twitter width={iconSize} />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/pheralb/screenshot"
          className={className}
        >
          <GitHub width={iconSize} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Header;
