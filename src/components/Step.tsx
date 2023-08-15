// https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID

import React, { FormEvent, FormEventHandler, HTMLAttributes, cloneElement, forwardRef, useRef, useState } from "react";

interface ContentProps extends HTMLAttributes<HTMLElement> {
  index: number
  onSubmit: FormEventHandler<HTMLFormElement>
}
const Content = forwardRef<HTMLButtonElement,ContentProps>(({children,index, className, onSubmit,...props }, ref) => {
  return <form onSubmit={onSubmit} className={`step relative overflow-hidden [&>*]:absolute [&>*]:top-0 [&>*]:bottom-0 [&>*]:w-full [&>*]:left-full [&>*]:transition-all [&>*]:bg-white ${className??''}`} {...props}>
    {children}
    <style>{`${Array(index+1).fill(undefined).map((_,x) => `.step > *:nth-child(${x+1})`).join(', ') + '{left: 0;}'}`}</style>
    <button ref={ref} type="submit" className="hidden"></button>
  </form>;
});
export interface UseStepProps {
  onSubmit: (params: Record<string,string>) => unknown;
  onStep: (keys: string[]) => number;
  validator: {
    [key: string]: (value: string) => boolean;
  }
} 
export const useStep = ({validator, onSubmit,onStep}:UseStepProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [index, setIndex] = useState(0)
  const [valid, setValid] = useState(false)
  function addIndex() {
    setIndex(index + 1)
  }
  function deductIndex() {
    setIndex(index - 1)
  }
  function handleSubmit(e: FormEvent) {
      e.preventDefault();
      const target = e.target as typeof e.target;
      const res:Record<string, string> = Object.entries(target).filter(([_,input]) => input.name && input.value).reduce((a,[_,input]) => ({...a, [input.name]: input.value, }),{})
      const validArray = Object.entries(validator).filter(([key,validate]) => validate(res[key])).map(x => x)
      const valid = !!validArray.length && validArray.every(([key,validate]) => validate(res[key]))
      console.log(validArray.map(([x]) => x))
      setValid(valid)
      if (!valid) return setIndex(onStep(validArray.map(([x]) => x)))
      onSubmit(res);
  }
  return {
    btnRef,
    index, 
    setIndex, 
    addIndex, 
    deductIndex,
    handleSubmit,
    valid,
  }
};
export interface StepProps extends UseStepProps {
  children: React.ReactNode
}
export default function({validator, onSubmit,onStep, children}:StepProps) {
  const {index, btnRef, handleSubmit, valid}= useStep({validator,onSubmit,onStep})
  console.log(index)
  return (
    <Content className="h-56" index={index} ref={btnRef} onSubmit={handleSubmit}>
      {children} {valid ? 1 : 2}
    </Content>
  )
};
