interface Props {
    name: string;
    btnCss: string
}

function Button({ name, btnCss }: Props) {
  return (
      <button className={`${btnCss} bg-darkLime text-white px-5 py-2 rounded focus:outline-5 focus:outline-blue-500`}>{name}</button>
  )
}

export default Button
