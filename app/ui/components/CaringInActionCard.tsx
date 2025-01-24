import ButtonIcon from "./ButtonIcon";
import Image, { StaticImageData } from "next/image";
import { GoArrowRight } from "react-icons/go";
interface Props {
  title: string;
  src: StaticImageData;
  alt: string;
}
function CaringInActionCard({ title, src, alt }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image src={src} alt={alt} width={256.15} />
      <div className="flex flex-col items-center justify-center gap-2 absolute -bottom-[70] bg-silver rounded w-[80%] h-[123] drop-shadow-lg p-1 text-greyText text-sm">
        <p className="font-bold text-center">{title}</p>
        <ButtonIcon
          name={"Readmore"}
          containerCss={"text-darkLime"}
          cssBtn={"font-bold"}
          icon={<GoArrowRight />}
        />
      </div>
    </div>
  );
}

export default CaringInActionCard;
