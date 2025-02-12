import CaringInActionCard from "./components/CaringInActionCard";
import CouchWork from '@/public/images/CouchWork.png'
import BedWork from '@/public/images/BedWork.png'
import DeskWork from '@/public/images/DeskWork.png'


function CaringInAction() {
  return (
    <div className="flex flex-col gap-6 w-full min-h-[400] items-center justify-center mb-28 p-8">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-4xl text-greyDark font-bold">
          Caring is the new marketing
        </h1>
        <p className="text-center max-w-[700px] text-greyText">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who&apos;s joining the community, 
          read about how our community are increasing their membership income
          and lot&apos;s more​.
        </p>  
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-36 md:gap-10">
        <CaringInActionCard
          title={"Creating Streamlined Safeguarding Processes with OneRen"}
          src={CouchWork}
          alt={""}
        />
        <CaringInActionCard
          title={
            "What are your safeguarding responsibilities"
          }
          src={BedWork}
          alt={""}
        />
        <CaringInActionCard
          title={"Revamping the Membership Model with Triathlon Australia"}
          src={DeskWork}
          alt={""}
        />
      </div>
    </div>
  );
}

export default CaringInAction
