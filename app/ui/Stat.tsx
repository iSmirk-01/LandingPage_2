import PersonIcon from '@/public/svg/PersonIcon.svg'
import HandIcon from '@/public/svg/HandsIcon.svg'
import IdeaIcon from '@/public/svg/IdeaIcon.svg'
import CardIcon from '@/public/svg/CardIcon.svg'
import StatComponent from './components/StatComponent';
import styles from './conditionBreaks.module.css'

function Stat() {
  return (
    <div className="w-full min-h-[300] grid grid-cols-1 2xl:grid-cols-2 place-items-center gap-5 bg-silver px-10 py-8">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-bold text-4xl text-greyDark">
          Helping a local
          <br className={`${styles.conditionalBreak}`} /> <span className="text-darkLime">business reinvent itself</span>
        </h1>
        <p className={`${styles.conditionalWidthText}`}>
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatComponent
          src={PersonIcon}
          alt="Members"
          stat={"2,245,341"}
          from="Members"
        />
        <StatComponent
          src={HandIcon}
          alt="Clubs"
          stat={"46,328"}
          from="Clubs"
        />
        <StatComponent
          src={IdeaIcon}
          alt="Event Bookings"
          stat={"828,867"}
          from="Event Bookings"
        />
        <StatComponent
          src={CardIcon}
          alt="Payments"
          stat={"1,926,436"}
          from="Payments"
        />
      </div>
    </div>
  );
}

export default Stat
