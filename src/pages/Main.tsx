import Input from "@/Input";
import Step, {useStep} from "@/Step";
import { useEffect,useState } from "react";

const Main = () => {
  const {index, addIndex, btnRef} = useStep() 
  useEffect(() => {
    return () => {
      setTimeout(() => {
        btnRef.current?.click()
      }, 3000)
    }
  }, [])
  return (
    <>
      <div className="h-9">dawdawd</div>
      {/* <NaverMap className="h-56" /> */}
        <Step className="h-56" index={index} ref={btnRef}>
          <div onClick={addIndex}>
            <Input name="key" required/>
          </div>
          <div onClick={addIndex}>2</div>
          <div onClick={addIndex}>3</div>
          <div onClick={addIndex}>4</div>
        </Step>
      dkjaw;ldkawl;kd;awd
    </>
  );
};

export default Main;
