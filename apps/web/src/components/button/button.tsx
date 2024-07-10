import { HtmlHTMLAttributes } from "react";
import "./style.css"

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <button className="button-primary" {...props }>{label}</button>;
};

export default Button;