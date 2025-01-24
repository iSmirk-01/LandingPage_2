import Image from 'next/image'
import FourPill from '@/public/svg/FourPillIcon.svg'
import Sphear from '@/public/svg/SphearIcon.svg'
import Oc from '@/public/svg/OcIcon.svg'
import LogoIpsum from '@/public/svg/LogoIpsumIcon.svg'
import Swirll from '@/public/svg/swrillIcon.svg'
import Infinite from '@/public/svg/infiniteIcon.svg'
import OcTwo from '@/public/svg/OcTwoIcon.svg'

function TrustedBy() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="flex flex-col gap-3 w-full h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-greyDark">Our clients</h1>
        <p className="text-greyText px-4 text-center">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-7 gap-8 w-[80%] h-full place-items-center">
        <Image src={FourPill} alt="FourPill logo" />
        <Image src={Sphear} alt="Sphear logo" />
        <Image src={Oc} alt="Oc logo" />
        <Image src={LogoIpsum} alt="LogoIpsum logo" />
        <Image src={Swirll} alt="Swirll logo" />
        <Image
          src={Infinite}
          alt="Infinite logo"
          className="sm:col-span-3 md:col-span-1"
        />
        <Image
          src={OcTwo}
          alt="OcTwo logo"
          className="sm:col-span-2 md:col-span-1"
        />
      </div>
    </div>
  );
}

export default TrustedBy
