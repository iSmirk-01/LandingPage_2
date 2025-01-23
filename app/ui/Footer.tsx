import Nextcent from '@/public/svg/FooterNextcent.svg'
import Image from 'next/image'
import Instagram from '@/public/svg/Instagram.svg'
import Ball from '@/public/svg/Idk.svg'
import Twitter from '@/public/svg/Twitter.svg'
import YouTube from '@/public/svg/YouTube.svg'
import InputArrow from '@/public/svg/InputArrow.svg'

function Footer() {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-max w-full p-10 bg-greyDark">
      <div className='flex items-center justify-center'>
          <div className=" flex flex-col gap-8 justify-start items-start">
            <Image src={Nextcent} alt={"Nextcent logo"} className="scale-[1.3] ml-5" />
            <p className="text-white">
              Copyright © 2020 Landify UI Kit.
              <br /> All rights reserved
            </p>
            <div className="flex gap-3 items-center justify-center">
              <Image className='cursor-pointer scale-[1.3]' src={Instagram} alt={"Instagram link"} />
              <Image className='cursor-pointer scale-[1.3]' src={Ball} alt={"ball link"} />
              <Image className='cursor-pointer scale-[1.3]' src={Twitter} alt={"Twitter link"} />
              <Image className='cursor-pointer scale-[1.3]' src={YouTube} alt={"Youtube link"} />
            </div>
          </div>
      </div>
      <div className="flex items-center justify-center gap-16 w-full">
        <ul className="flex flex-col items-center justify-center text-white gap-1">
          <li className="font-bold text-lg mb-4">Company</li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Blog </li>
          <li className='cursor-pointer'>Contact us</li>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>Testimonials</li>
        </ul>
        <ul className="flex flex-col items-center justify-center text-white gap-1">
          <li className="font-bold text-lg mb-4">Support</li>
          <li className='cursor-pointer'>Help center</li>
          <li className='cursor-pointer'>Terms of service</li>
          <li className='cursor-pointer'>Legal</li>
          <li className='cursor-pointer'>Privacy policy</li>
          <li className='cursor-pointer'>Status</li>
        </ul>
        <div className="flex flex-col gap-4 h-full items-start">
          <h1 className="text-white font-bold text-lg">Stay up to date</h1>
          <label
            className="flex justify-center rounded-lg bg-white/30 px-6 py-2 items-center"
            aria-label="add email"
          >
            <input
              type="text"
              placeholder="Your email address"
              className="bg-transparent outline-none text-white"
            />
            <Image
              src={InputArrow}
              alt={""}
              aria-disabled
              className="scale-[1.5]"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Footer
