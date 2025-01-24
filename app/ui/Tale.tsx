import Image from "next/image"
import Button from "./components/Button"
import Contact from '@/public/svg/IllustrationContact.svg'

function Tale() {
  return (
    <div className="w-full min-h-[301] grid place-items-center grid-cols-1 md:grid-cols-2 p-10 gap-8">
      <Image src={Contact} alt="a phone iamge" />
      <div className="flex flex-col items-start justify-center gap-5">
        <h1 className="text-4xl font-bold text-greyDark">The unseen of spending three<br/> years at Pixelgrade</h1>
        <p className="prose text-greyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button name="Learn More" btnCss="" />
      </div>
    </div>
  );
}

export default Tale
