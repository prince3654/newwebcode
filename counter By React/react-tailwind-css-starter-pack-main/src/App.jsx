import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function DecreaseHandler() {
  
   
      setCount(count - 1);
    }
    function IncreaseHandler() {
      setCount(count + 1);
    }
    function ResetHandler() {
      setCount(0);
    }
  
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-blue-100 flex-col gap-10">
      <div className="text-[#0398d4]  text-2xl font-medium ">
        Increment & Decrement
      </div>
      <div className="flex bg-slate-100 justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={DecreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text- text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl">{count} </div>
        <button onClick={IncreaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text- text-5xl" >+</button>
      </div>

      <div>
        <button onClick={ResetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
      </div>
    </div>
  );
}

export default App;
