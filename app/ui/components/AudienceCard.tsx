import Image from "next/image"

interface Props {
    src: string
    alt: string;
    title: string;
    description: string;
}

function AudienceCard({ src, alt, title, description }: Props) {
  return (
    <div className='flex flex-col items-center justify-center gap-3 p-8 h-[400] w-[70%]'>
      <Image src={src} alt={alt} />
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <p className="text-center">{description}</p>
    </div>  
  )
}

export default AudienceCard
