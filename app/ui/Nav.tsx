import Image from "next/image"
import NexcentLogo from "@/public/svg/NexcentLogoSvg.svg";
import Button from "./components/ButtonIcon";
import { GoArrowRight } from "react-icons/go";

function Nav() {
  return (
    <div className="w-full h-[58] flex items-center justify-between px-20 py-8">
      <Image src={NexcentLogo} alt="Nexcent logo" className="scale-[1.2]" />
      <div className="flex items-center justify-center gap-4">
          <ul className="flex gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Community</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>
            <Button name="Register Now" containerCss="px-3 py-2 rounded bg-darkLime text-white" cssBtn="" icon={<GoArrowRight className="text-white" />} />
      </div>
    </div>
  );
}

export default Nav
