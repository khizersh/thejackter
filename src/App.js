import "bootstrap/dist/css/bootstrap.css";
import NavbarWrapper from "./Components/NavbarWrapper/Index";
import ProductDescription from "./Views/ProductDescription";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarWrapper />
      <ProductDescription />
    </div>
  );
}

export default App;
