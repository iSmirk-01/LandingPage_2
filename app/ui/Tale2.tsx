import Image from 'next/image'
import Button from './components/Button'
import Pana from '@/public/svg/pana.svg'

function Tale2() {
  return (
    <div className='grid grid-cols-[1fr_2fr] p-20 w-full place-items-center gap-1'>
      <Image src={Pana} alt='an image of a mobile phone' className='' />
      <div className='flex flex-col gap-4 justify-start items'>
        <h1 className='text-4xl font-bold text-greyDark'>How to design your site footer like<br/> we did</h1>
        <p className='prose text-greyText'>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button name="Learn More" btnCss="self-start" />
      </div>
    </div>
  );
}

export default Tale2
