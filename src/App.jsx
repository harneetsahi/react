import { useEffect, useState, useRef, createContext, useContext } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { atom } from "./store/atoms/counter.js";

/////////////////////////////// contextApi

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
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

function Value() {
  return <div>{count}</div>;
}

export default App;
