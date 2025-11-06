interface ButtonText{
    text:string
}

const Button = ({text}:ButtonText) => {
  return (
   <button  className='bg-black py-2 px-5 text-white font-sans w-fit'>{text}</button>
  )
}

export default Button