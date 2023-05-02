import SettingsDialog from "@/components/settings";
import { ExternalLink } from "@/ui";
import { GitHub, Twitter, Combine } from "iconoir-react";
import Link from "next/link";

const iconSize = 20;

const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex w-full items-center justify-between px-6 pt-6 text-neutral-400">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Combine width={iconSize} />
          <h3 className="font-medium">frame</h3>
          <span className="text-yellow-700">beta</span>
        </div>
      </Link>
      <div className="flex items-center space-x-5">
        <SettingsDialog />
        <ExternalLink
          href="https://twitter.com/pheralb_"
          className="transition-colors duration-100 hover:text-blue-500"
        >
          <Twitter width={iconSize} />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/pheralb/screenshot"
          className="text-neutral-400 transition-colors duration-100 hover:text-neutral-200"
        >
          <GitHub width={iconSize} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Header;
