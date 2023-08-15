// https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID

import { HTMLAttributes, forwardRef, useRef, useState } from "react";

interface StepProps extends HTMLAttributes<HTMLElement> {
  index: number
}
const Step = forwardRef<HTMLButtonElement,StepProps>(({children,index, className,...props }, ref) => {
  const onSubmit:React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault();
    const target = e.target as typeof e.target;
    const res = Object.entries(target).filter(([_,input]) => input.name && input.value).reduce((a,[_,input]) => ({...a, [input.name]: input.value, }),{})
    console.log(res)
  }
  return <form onSubmit={onSubmit} className={`step relative overflow-hidden [&>*]:absolute [&>*]:top-0 [&>*]:bottom-0 [&>*]:w-full [&>*]:left-full [&>*]:transition-all [&>*]:bg-white ${className??''}`} {...props}>
    {children}
    <style>{`${Array(index+1).fill(undefined).map((_,x) => `.step > *:nth-child(${x+1})`).join(', ') + '{left: 0;}'}`}</style>
    <button ref={ref} type="submit" className="hidden"></button>
  </form>;
});

export const useStep = () => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [index, setIndex] = useState(0)
  function addIndex() {
    setIndex(index + 1)
  }
  function deductIndex() {
    setIndex(index - 1)
  }
  return {
    btnRef,
    index, setIndex, addIndex, deductIndex
  }
};
export default Step;
