import React from "react";
import { useState } from "react";

const DemoState = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("");
  const [name, setName] = useState("nayan");

  const countClick = () => {
    setCount(count + 1);
  };
  const valueChange = (f) => {
    setTxt(f.target.value);
    document.getElementById("txt").innerHTML = f.target.value;
  };

  const changeName = () => {
    setName("Isha", "nyn");
  };

  return (
    <>
      <h1>{name}</h1>
      <input type="button" value="Change Name" onClick={changeName} />
      <input type="button" value="Count the Click" onClick={countClick} />
      <input type="text" onChange={valueChange} />
      <div id="txt">now,{count} is click</div>
    </>
  );
};
export default DemoState;
