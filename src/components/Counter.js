import { useState } from "react";

function Counter() {
  const [inrc, setInrc] = useState(0);

  return (
    <div className="justify-center text-center items-center m-auto">
      <CounterHead />
      <CounterBody inrc={inrc} setInrc={setInrc} />
      <CounterReset setInrc={setInrc} />
    </div>
  );
}

function CounterHead() {
  return <h1 className="text-blue-400">Increment and Decrement</h1>;
}

function CounterBody({ inrc, setInrc }) {
  function handleClick() {
    setInrc(inrc + 1);
  }
  function handleclickDerc() {
    if (inrc > 0) setInrc(inrc - 1);
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 bg-white border-r-2 border-black "
        onClick={handleclickDerc}
      >
        -
      </button>
      <p className="px-4  bg-white border-r-2 border-black">{inrc}</p>
      <button className="px-4  bg-white" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

function CounterReset({ setInrc }) {
  function handleReset() {
    setInrc(0);
  }
  return (
    <button
      className="text-white  bg-blue-400 px-3 mt-4 rounded-2xl p-1"
      onClick={handleReset}
    >
      Reset
    </button>
  );
}

export default Counter;
