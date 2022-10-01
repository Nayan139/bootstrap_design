import React, { Component } from "react";
class ClassDemo extends Component {
  componentDidMount() {
    console.log("this is mount");
  }
  componentDidUpdate() {
    console.log("this is update");
  }
  constructor() {
    super();
    console.log("this is constructor");
    this.state = {
      Data: "",
    };
  }

  render() {
    console.log("this is render");
    const BtnClick = () => {
      this.setState({ Data: "this my state" });
    };
    return (
      <>
        <h1>Hello nyn</h1>
        <input type="button" value="update here" onClick={BtnClick}></input>
      </>
    );
  }
}

export default ClassDemo;
