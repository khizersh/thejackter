import SliderComponent from "../../Components/Slider";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import "./style.css";
import { slides, products } from "../../constant";
import { Link } from "react-router-dom";
import CardFour from "../../Components/Cards/card-four";

const Home = () => {
  return (
    <div className="mt-4">
      <SliderComponent slides={slides} />
      <div className="container">
        <h1 className="text-center font-weight-bold mt-5">New Arrival</h1>
        <CardFour products={products} />
      </div>
    </div>
  );
};

export default Home;
