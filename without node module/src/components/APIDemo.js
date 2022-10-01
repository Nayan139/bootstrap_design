import React, { useState, useEffect } from "react";
const APIDemo = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((abc) => SetData(abc));
  }, []);
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <a href={"/read/" + item.id}>Read More</a>
          </>
        );
      })}
    </>
  );
};
export default APIDemo;
