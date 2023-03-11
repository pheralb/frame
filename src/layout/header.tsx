import { ExternalLink } from "@/ui/link";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

const Header = () => {
  return (
    <div className="fixed top-0 w-full py-5 px-6 flex items-center justify-between text-neutral-400">
      <h3 className="font-medium">screenshot</h3>
      <div className="flex items-center space-x-4">
        <ExternalLink
          href="https://twitter.com/pheralb_"
          className="text-neutral-400 hover:text-white duration-100 transition-colors"
        >
          <IoLogoTwitter size={20} />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/pheralb/screenshot"
          className="text-neutral-400 hover:text-white duration-100 transition-colors"
        >
          <IoLogoGithub size={20} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Header;
