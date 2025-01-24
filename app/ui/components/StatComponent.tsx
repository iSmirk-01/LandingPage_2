import Image from 'next/image'

interface Props {
    src: string;
    alt: string;
    stat: string | number;
    from: string
}

function StatComponent({ src, alt, stat, from }: Props) {
  return (
    <div className='w-full h-full relative flex items-center justify-start gap-3 p-4'>
      <Image src={src} alt={alt} />
      <div className='flex items-center justify-center gap-3'>
        <div className='font-bold text-3xl text-greyDark'>{stat}</div>
        <p className='text-greyText'>{from}</p>
      </div>
    </div>
  )
}

export default StatComponent
