import Main from "!/Main";
import Tutorial from "!/Tutorial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/tutorial" Component={Tutorial} />
      </Routes>
      {/* <Route path="/photo" component={Photo}/>
        <Route path="/rooms" component={Rooms}/> */}
    </BrowserRouter>
    // <>

    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
};

export default App;
