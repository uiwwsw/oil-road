import Input from "@/Input";
import Step from "@/Step";
import { useEffect,useState } from "react";

const Main = () => {
  function onSubmit() {
    'dawdawdw'
  }
  const validator = {
    key: (name: string) => {
      return name.length > 3;
    },
    key2: (name: string) => {
      return name.length > 3;
    }
  }

  const onStep = (keys: string[]) => {
    console.log(keys)
    if(keys.includes('key')) {
      if(keys.includes('label')) {
        return 2
      }
      return 1
    }
    console.log(11111)
    return 0
  }
 
  return (
      <div className="h-9">dawdawd
        <Step validator={validator} onSubmit={onSubmit} onStep={onStep}>
          <div>
            <Input name="key" />
            <Input name="key2" />
            <button>다음</button>
          </div>
          <div>
            <Input name="label" />
            <button>다음</button>
          </div>
          <div>3</div>
          <div>4</div>
        </Step>
      </div>

  );
};

export default Main;
