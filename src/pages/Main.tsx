import Step from "@/Step";
import useSWR from 'swr'
import SuspenseWrapper from "@/Suspense";

const Title2 = () => {
  const {data} = useSWR('d2', (url:string) => {
    throw new Error('알 수 없는 에러 발생방생')
  });
return <>ddd: {data}</>
}
const Title3 = () => {
  const {data} = useSWR('d3', (url:string) => {
    throw new Error('알 수 없는 에러 발생방생')
  });
return <>ddd: {data}</>
}
const Title = () => {
  const {data} = useSWR('d1', (url:string) => new Promise(res => setTimeout(() => res('true'), 1000)));
return <>ddd: {data}</>
}
const Main = () => {

  return (
    <>
      <div className="h-9">dawdawd</div>
      {/* <NaverMap className="h-56" /> */}
        <Title2/>
      <SuspenseWrapper>
        divdawdwa
        <Title3 />
      </SuspenseWrapper>

      <Step>
        <div></div>
        <div>2</div>
        <div>3</div>
      </Step>
      dkjaw;ldkawl;kd;awd
    </>
  );
};

export default Main;
