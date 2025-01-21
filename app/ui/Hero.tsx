import Image from 'next/image'
import Illustration from '@/public/svg/Illustration.svg'
import Button from './components/Button'

function Hero() {
  return (
    <div className="w-full min-h-[416] bg-silver grid grid-cols-2 place place-items-center px-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className='text-5xl font-bold'>Lessons and insights<br/> <span className='text-darkLime'>from 8 years</span></h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button name='Register' btnCss='self-start' />
      </div>
      <Image src={Illustration} alt="a man presenting a website" />
    </div>
  );
}

export default Hero
