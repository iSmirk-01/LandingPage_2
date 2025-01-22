import React from 'react'
import ButtonIcon from './components/ButtonIcon'
import { GoArrowRight } from "react-icons/go";

function Demo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-silver min-h-[300] w-full">
      <h1 className="font-bold text-5xl text-center leading-tight">
        Pellentesque suscipit<br/> fringilla libero eu.
      </h1>
      <ButtonIcon
        name={"Get a Demo"}
        containerCss={"bg-darkLime text-white rounded px-4 py-3"}
        cssBtn={""}
        icon={<GoArrowRight />}
      />
    </div>
  );
}

export default Demo
