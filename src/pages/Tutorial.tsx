import Input from "@/Input";
import Step, { useStep } from "@/Step";
import { useEffect } from "react";

const Tutorial = () => {
  const { index, addIndex, btnRef, onSubmit } = useStep()
  useEffect(() => {
    return () => {
      setTimeout(() => {
        btnRef.current?.click()
      }, 3000)
    }
  }, [])
  return (
    <div className="p-2">
      <h1 className="text-emerald-500">기본 정보를 알려주세요</h1>
      <Step className="h-56" index={index} ref={btnRef} onSubmit={onSubmit}>
        <div>
          <Input label="연비" name="key" type="number" required={true} />
          <button type="button" onClick={addIndex}>다음</button>
        </div>
        <div onClick={addIndex}>2</div>
        <div onClick={addIndex}>3</div>
        <div onClick={addIndex}>4</div>
      </Step>
    </div>
  );
};

export default Tutorial;
