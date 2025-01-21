import React from 'react'
interface Props {
    name: string
    containerCss: string
    cssBtn: string
    icon: React.ReactNode
}

function ButtonIcon({ name, containerCss, cssBtn, icon }: Props) {
  return (
    <button
      className={`${containerCss} relative flex gap-3 items-center bg-darkLime cursor-pointer focus:outline-5 focus:outline-blue-500`}
      aria-label={name} // Optional if `name` is clear enough
    >
      <span className={`${cssBtn} text-white`}>{name}</span>
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}

export default ButtonIcon;
