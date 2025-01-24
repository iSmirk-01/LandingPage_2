import React from 'react'
import AudienceCard from './components/AudienceCard'
import Group from '@/public/svg/Group.svg'
import Building from '@/public/svg/Building.svg'
import Hands from '@/public/svg/Hands.svg'

function Audience() {
  return (
    <div className="w-full min-h-[291] grid place-items-center p-8">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="font-bold text-4xl text-center text-greyDark">
          Manage your entire community<br /> in a single system
        </h1>
        <p className='text-greyText'>Who is Nextcent suitable for?</p>
      </div>
      <div className="grid brid-cols-1 lg:grid-cols-3 gap-4 place-items-center p-8">
        <AudienceCard
          src={Group}
          alt={`Membership Organisations`}
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <AudienceCard
          src={Building}
          alt={`National Associations`}
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <AudienceCard
          src={Hands}
          alt="Clubs and Groups"
          title={`Clubs And Groups`}
          description="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </div>
  );
}

export default Audience
