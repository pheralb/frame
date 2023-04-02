import { ExternalLink } from "@/ui/link";
import { GitHub, Twitter, Droplet } from "iconoir-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full py-5 px-6 flex items-center justify-between text-neutral-400">
      <div className="flex items-center space-x-2">
      <Droplet width={16} />
      <h3 className="font-medium">screenshot</h3>
      </div>
      <div className="flex items-center space-x-5">
        <ExternalLink
          href="https://twitter.com/pheralb_"
          className="text-neutral-400 hover:text-white duration-100 transition-colors"
        >
          <Twitter width={20} />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/pheralb/screenshot"
          className="text-neutral-400 hover:text-white duration-100 transition-colors"
        >
          <GitHub width={20} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Header;
