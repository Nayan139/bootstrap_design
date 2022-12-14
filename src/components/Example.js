import React from "react";
import Route1 from "./Route1";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Example = () => {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/carrer">Carrer</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/:id" children={<Child />}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
const Child = () => {
  let { id } = useParams();
  return (
    <>
      <div>
        <h3>id: {id}</h3>
      </div>
    </>
  );
};

export default Example;
