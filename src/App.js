import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';

import NavbarWrapper from "./Components/NavbarWrapper/Index";
import Home from "./Views/Home";
import ProductDescription from "./Views/ProductDescription";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarWrapper />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product/:slug">
            <ProductDescription />
          </Route>
          {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
        </Switch>
      </Router>
      {/* <ProductDescription /> */}
    </div>
  );
}

export default App;
