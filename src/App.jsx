import { useEffect, useState, useRef, createContext, useContext } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter.js";
import { memo } from "react";

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Value />
//         <Increase />
//         <Decrease />
//       </RecoilRoot>
//     </div>
//   );
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);

//   return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
// }

// function Value() {
//   const count = useRecoilValue(counterAtom);

//   return <div>{count}</div>;
// }

/////// memo

// function App() {
//   return (
//     <div>
//       <MemoizedCounter />
//     </div>
//   );
// }

// const MemoizedCounter = memo(Counter);

// const MemoizedIncrease = memo(Increase);

// const MemoizedDecrease = memo(Decrease);

// const MemoizedValue = memo(Value);

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount((c) => c + 1);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       <MemoizedValue />
//       <MemoizedIncrease />
//       <MemoizedDecrease />
//     </div>
//   );
// }

// function Increase() {
//   return <button>Increase</button>;
// }

// function Decrease() {
//   return <button>Decrease</button>;
// }

// function Value() {
//   return <div></div>;
// }

/////// using derived selectors

function App() {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={() => increase()}>Increase</button>
      <button onClick={() => decrease()}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>{even ? "True" : "False"}</div>;
}

export default App;
