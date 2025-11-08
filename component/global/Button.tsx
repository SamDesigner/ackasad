interface ButtonText {
  text: string;
  isPrimary?: boolean;
  type?: string;
}

const Button = ({ text , type }: ButtonText) => {
  return (
    <>
      {type === "primary" ? (
        <button className={"bg-black cursor-pointer py-2 px-5 text-primary font-sans w-fit"}>
          {text}
        </button>
      ) : (
        <button className={"bg-primary cursor-pointer  py-2.5 px-8 text-black font-sans w-fit"}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
