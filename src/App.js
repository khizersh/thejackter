import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import NavbarWrapper from "./Components/NavbarWrapper/Index";
import Home from "./Views/Home";
import ProductDescription from "./Views/ProductDescription";
import Cart from "./Views/Cart"

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
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
