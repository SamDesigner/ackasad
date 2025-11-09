import React from "react";
interface ButtonProps {
    text?:string
}
const TextButton = ({ text = "Learn more" }: ButtonProps) => {
  return <p className="font-bold font-sans cursor-pointer">⸺ {text}</p>;
};

export default TextButton;
