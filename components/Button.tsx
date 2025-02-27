"use client";

// components/Button.tsx
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600 text-white";
      case "danger":
        return "bg-red-500 hover:bg-red-600 text-white";
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-300 ${getButtonClass()} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
