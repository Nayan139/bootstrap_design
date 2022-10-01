import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const NestingRoute = () => {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/task">Task</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/task">
              <Task />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const Task = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendaring</Link>
          </li>
          <li>
            <Link to={`${url}/props`}>Props</Link>
          </li>
          <li>
            <Link to={`${url}/const`}>Const</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h2>Please Select the Topics</h2>
          </Route>
          <Route path={`${path}/:topicid`}>
            <Tasks />
          </Route>
        </Switch>
      </div>
    </>
  );
};

const Tasks = () => {
  let { topicid } = useParams();
  return (
    <>
      <div>
        <h1>{topicid}</h1>
      </div>
    </>
  );
};
export default NestingRoute;
