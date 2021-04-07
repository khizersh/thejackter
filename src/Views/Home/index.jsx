import SliderComponent from "../../Components/Slider";
import CardFour from "../../Components/Cards/card-four";
import Footer from "../../Components/Footer"
import { slides, products } from "../../constant";
import "./style.css";
const Home = () => {
  return (
    <div className="mt-4">
      <SliderComponent slides={slides} />
      <div className="container">
        <h1 className="text-center font-weight-bold mt-5">New Arrival</h1>
        <CardFour products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
