interface ButtonText {
  text: string;
  isPrimary?: boolean;
  type?: string;
}

const Button = ({ text , type }: ButtonText) => {
  return (
    <>
      {type === "primary" ? (
        <button className={"bg-black py-2 px-10 text-primary font-sans w-fit"}>
          {text}
        </button>
      ) : (
        <button className={"bg-primary border border-2  border-black py-2 px-10 text-black font-sans w-fit"}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
