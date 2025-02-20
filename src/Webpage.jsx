import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Button from "./components/Button";
import Input from "./components/Input";

function Webpage() {
  // const [] = useState();

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Webpage;
