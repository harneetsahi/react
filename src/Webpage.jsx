import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Button from "./components/Button";
import Input from "./components/Input";

function Webpage() {
  return (
    <>
      <div className="min-h-screen ">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Webpage;
