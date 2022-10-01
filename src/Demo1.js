import { useState } from "react";
const Demo1 = (props) => {
  const [txt, settxt] = useState("");

  const valueChange = (e) => {
    settxt(e.target.value);
    //console.log(e.target.value);
    document.getElementById("txt").innerHTML = e.target.value;
  };

  return (
    <>
      <h1>Hello {props.namee}</h1>
      <h2>Hello isha</h2>

      <input type="text" onChange={valueChange}></input>
      <div id="txt">{txt}</div>
    </>
  );
};

export default Demo1;
