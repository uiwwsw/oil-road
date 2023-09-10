import { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, useRef, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
const Input = ({ label,className,onFocus, onBlur,onChange, value: _, defaultValue, ...props }: InputProps) => {
  const [value, setValue] = useState(defaultValue ?? '')
  const titleRef = useRef<HTMLSpanElement>(null)
  const handleFocus:FocusEventHandler<HTMLInputElement> = (e) => {
    onFocus && onFocus(e)
    titleRef.current?.classList.add('translate-y-0')
  }
  const handleBlur:FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur && onBlur(e)
    if (!value) titleRef.current?.classList.remove('translate-y-0')
  }
  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e)
    setValue(e.target.value)
  }
  return <label className="relative block pt-10">
    <span ref={titleRef} className="absolute left-1 top-1 text-[18px] translate-y-10 transition-transform">{label}</span>
    <input value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={`block w-full border-b p-1 text-lg border-emerald-500 shadow-emerald-50 shadow ${className ?? ''}`} {...props} />
  </label>;
};

export default Input;
