// https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID

import { HTMLAttributes, ReactNode, useEffect } from "react";

interface StepProps extends HTMLAttributes<HTMLElement> {
}
const Step = ({children, ...props }: StepProps) => {
  const {length} = children as ReactNode[];
  console.log(length)
  return <div className="overflow-hidden w-full">
    <div className="flex [&>*]:flex-1" style={{width: length  * 100 + '%'}} {...props}>
    {children}
  </div>
  </div>;
};

export default Step;
