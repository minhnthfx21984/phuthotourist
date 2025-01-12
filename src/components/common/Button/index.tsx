import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <>
      <button className="my-btn" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
