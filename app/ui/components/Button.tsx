import React from 'react'
interface Props {
    name: string
    containerCss: string
    cssBtn: string
    icon: React.ReactNode
}

function Button({ name, containerCss, cssBtn, icon }: Props) {
  return (
    <div
      className={`${containerCss} relative flex gap-3 items-center bg-darkLime cursor-pointer`}
    >
      <button className={`${cssBtn} text-white`}>{name}</button>
      <span>{icon}</span>
    </div>
  );
}

export default Button
