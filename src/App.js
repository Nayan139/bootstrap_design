import "./App.css";
import "./components/Header";
import "./components/Menu";
import "./components/Slider";
import "./components/Cards";
import "./components/Response";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Response from "./components/Response";
import Alumin from "./components/Alumin";
import Difference from "./components/Difference";
import Demo from "./Demo";
import Demo1 from "./Demo1";
import ClassDemo from "./components/ClassDemo";
import DemoState from "./components/DemoState";
import APIDemo from "./components/APIDemo";
import Example from "./components/Example";
import Nesting from "./components/NestingRoute";

function App() {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Slider></Slider>
      <Cards></Cards>
      <Response></Response>
      <Alumin></Alumin>
      <Difference></Difference>
      {/* <Demo name="CDMI"></Demo>
      <Demo1 namee="isha"></Demo1>
      <ClassDemo></ClassDemo>
      <DemoState firstname="nayan"></DemoState> 
      <APIDemo />*/}
      {/* <Example />
      <Nesting></Nesting> */}
    </>
  );
}

// function App() {
//   return (
//     <div>
//       <Button variant="primary">Click Me!</Button>
//     </div>
//   );
// }

export default App;
