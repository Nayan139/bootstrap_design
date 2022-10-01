import { useState, useEffect } from "react";
const Demo = (props) => {
  const [txt, setTxt] = useState("");

  const typeChange = (e) => {
    setTxt(e.target.value);
    //console.log(e.target.value);
    document.getElementById("txt").innerHTML = e.target.value;
  };
  useEffect(() => {
    console.log("hello effect");
  }, []);
  return (
    <>
      <h1>{props.name}</h1>
      <input type="text" onChange={typeChange}></input>
      <div id="txt">{txt}</div>
    </>
  );
};
export default Demo;
