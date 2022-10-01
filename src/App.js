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
