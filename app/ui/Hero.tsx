import Image from 'next/image'
import Illustration from '@/public/svg/Illustration.svg'
import Button from './components/Button'

function Hero() {
  return (
    <div className="w-full min-h-[416] bg-silver grid grid-cols-1 md:grid-cols-2 place place-items-center gap-10 py-20 md:py-0">
      <div className="flex flex-col gap-6 items-center justify-center mx-8">
        <h1 className='text-5xl font-bold text-greyDark'>Lessons and insights<br/> <span className='text-darkLime'>from 8 years</span></h1>
        <p className='text-greyText'>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button name='Register' btnCss='self-start' />
      </div>
      <Image src={Illustration} alt="a man presenting a website" />
    </div>
  );
}

export default Hero
