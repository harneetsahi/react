import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const count = atom({
  key: "countState",
  default: 0,
});

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
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

function Value() {
  const countVal = useRecoilValue(count);
  return <div>{countVal}</div>;
}

export default App;
