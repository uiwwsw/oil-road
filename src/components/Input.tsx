import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
const Input = ({ className, ...props }: InputProps) => {

  return <label>
    <input className={` ${className ?? ''}`} {...props} />
  </label>;
};

export default Input;
