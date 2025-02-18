import { useEffect, useState, useRef, createContext, useContext } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter.js";
import { memo } from "react";
import {
  notificationsAtom,
  totalNoticationsSelector,
} from "./store/atoms/notifications.js";

import { todosAtomFamily } from "./store/atoms/todos.js";

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

/////// ANCHOR memo

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

/////// ANCHOR using derived selectors (recoil)

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Buttons />
//         <Counter />
//         <IsEven />
//       </RecoilRoot>
//     </div>
//   );
// }

// function Buttons() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount((c) => c + 2);
//   }

//   function decrease() {
//     setCount((c) => c - 1);
//   }

//   return (
//     <div>
//       <button onClick={() => increase()}>Increase</button>
//       <button onClick={() => decrease()}>Decrease</button>
//     </div>
//   );
// }

// function Counter() {
//   const count = useRecoilValue(counterAtom);

//   return <div>{count}</div>;
// }

// function IsEven() {
//   const even = useRecoilValue(evenSelector);

//   return <div>{even ? "Even" : "Odd"}</div>;
// }

/////// ANCHOR using derived selectors (recoil)

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Main />
//       </RecoilRoot>
//     </div>
//   );
// }

// function Main() {
//   const [notificationCount, setNotificationsCount] =
//     useRecoilState(notificationsAtom);
//   const totalNotifications = useRecoilValue(totalNoticationsSelector);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         gap: "10px",
//         border: "1px solid gray",
//       }}
//     >
//       <p>
//         Network (
//         {notificationCount.network >= 100 ? "99+" : notificationCount.network})
//       </p>
//       <p>Jobs ({notificationCount.jobs})</p>
//       <p>Messages ({notificationCount.messages})</p>
//       <p>
//         Notifications ({" "}
//         {notificationCount.notifications >= 100
//           ? "99+"
//           : notificationCount.notifications}
//         )
//       </p>
//       <p>Me ({totalNotifications})</p>
//     </div>
//   );
// }

/////// ANCHOR: atomFamily

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
      <Todo id={5} />
      <Todo id={6} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // const currentTodo = useRecoilValue(todosAtomFamily(id));

  /// to get from backend
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <div>
      Todo {todo.id}: {todo.title}
    </div>
  );
}

export default App;
