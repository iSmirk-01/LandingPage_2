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
import styles from './conditionBreaks.module.css'

function Testimonial() {
  return (
    <div className="w-full min-h-[300] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 p-14 place-items-center bg-silver">
      <Image
        src={TProduct}
        alt="a picture of a product"
        className="scale-[1.2]"
      />
      <div className="flex flex-col items-start justify-start gap-4">
        <p className="text-greyText">
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
        <p className="text-gray-400">British Dragon Boat Racing Association</p>
        <div className="grid md:grid-cols-4  lg:grid-cols-7 place-items-center lg:place-items-start gap-8 w-full py-10 px-9">
          <Image src={FourPill} alt="FourPill logo" />
          <Image src={Sphear} alt="Sphear logo" />
          <Image src={Oc} alt="Oc logo" />
          <Image src={LogoLipsum} alt="LogoLipsum logo" />
          <Image
            src={Swirl}
            alt="Swirl logo"
            className="md:col-start-2 md:col-end-3 lg:col-auto"
          />
          <Image
            src={Infinite}
            alt="Infinite logo"
            className="md:col-start-3 md:col-end-4 lg:col-auto"
          />
          <ButtonIcon
            name="Meet all customers"
            containerCss={`${styles.conditionalWrap} md:col-start-2 md:col-end-4 lg:col-auto whitespace-nowrap`}
            cssBtn="text-darkLime font-bold"
            icon={<GoArrowRight className="text-darkLime" />}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial
