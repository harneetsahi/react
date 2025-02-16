import { useEffect, useState, useRef, createContext, useContext } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter.js";
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

function App() {
  return (
    <div>
      <MemoizedCounter />
    </div>
  );
}

const MemoizedCounter = memo(Counter);

const MemoizedIncrease = memo(Increase);

const MemoizedDecrease = memo(Decrease);

const MemoizedValue = memo(Value);

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);

  return (
    <div>
      <MemoizedValue />
      <MemoizedIncrease />
      <MemoizedDecrease />
    </div>
  );
}

function Increase() {
  return <button>Increase</button>;
}

function Decrease() {
  return <button>Decrease</button>;
}

function Value() {
  return <div></div>;
}

export default App;
