import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Home";
import User from "../src/User";
import List from "../src/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <Router>
      <Switch>
        <Route path="/user/list">
          <List />
        </Route>
        <Route path="/user-form">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
