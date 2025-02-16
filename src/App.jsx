import { useEffect, useState, useRef, createContext, useContext } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter.js";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Value />
        <Increase />
        <Decrease />
      </RecoilRoot>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

function Value() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}</div>;
}

export default App;
