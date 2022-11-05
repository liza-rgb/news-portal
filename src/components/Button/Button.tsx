import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="font-bold text-lg bg-purple-main text-white py-3 px-12 
    rounded-lg hover:opacity-70 disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
