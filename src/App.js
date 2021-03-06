import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/index";
import { Provider } from "react-redux";
import "./App.css";

import NavbarWrapper from "./Components/NavbarWrapper/Index";
import Home from "./Views/Home";
import ProductDescription from "./Views/ProductDescription/index";
import Cart from "./Views/Cart";
import Categories from "./Views/Categories";
import CategoryProducts from "./Views/CategoryProducts";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <ToastContainer />
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
              <Route exact path="/categories">
                <Categories />
              </Route>
              <Route exact path="/category/:slug">
                <CategoryProducts />
              </Route>
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
