import React from "react";

interface IBtn {
  text: string;
  className: string;
  icon: JSX.Element;
}

const Button = ({ text, className, icon }: IBtn) => {
  return (
    <button className={className}>
      {text} <span>{icon}</span>
    </button>
  );
};

export default Button;
