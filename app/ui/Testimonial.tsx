import Image from 'next/image'
import ButtonIcon from './components/ButtonIcon'
import TProduct from '@/public/svg/TProduct.svg'
import FourPill from "@/public/svg/FourPillIcon.svg";
import Sphear from "@/public/svg/SphearIcon.svg";
import Oc from "@/public/svg/OcIcon.svg";
import LogoLipsum from "@/public/svg/LogoIpsumIcon.svg";
import Swirl from "@/public/svg/swrillIcon.svg";
import Infinite from "@/public/svg/infiniteIcon.svg";
import { GoArrowRight } from "react-icons/go";

function Testimonial() {
  return (
    <div className="w-full min-h-[300] grid grid-cols-[1fr_2fr] gap-4 p-14 place-items-center bg-silver">
      <Image src={TProduct} alt="a picture of a product" className='scale-[1.2]' />
      <div className="flex flex-col items-start justify-start gap-4">
        <p className=''>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h4 className="text-lg text-darkLime">Tim Smith</h4>
        <p>British Dragon Boat Racing Association</p>
        <div className="flex items-center justify-center gap-10">
          <Image src={FourPill} alt="FourPill logo" />
          <Image src={Sphear} alt="Sphear logo" />
          <Image src={Oc} alt="Oc logo" />
          <Image src={LogoLipsum} alt="LogoLipsum logo" />
          <Image src={Swirl} alt="Swirl logo" />
          <Image src={Infinite} alt="Infinite logo" />
          <ButtonIcon name="Meet all customers" containerCss="" cssBtn="text-darkLime" icon={<GoArrowRight className='text-darkLime' />} />
        </div>
      </div>
    </div>
  );
}

export default Testimonial
