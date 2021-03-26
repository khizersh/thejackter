import "./style.css";
import SliderComponent from "../../Components/Slider";
const slides = [
    {
        title: 'First item', description: 'Lorem ipsum', button: "Read More",
        image: "https://i.imgur.com/ZXBtVw7.jpg",
    },
    {
        title: 'Second item', description: 'Lorem ipsum', button: "Read More",
        image: "https://i.imgur.com/ZXBtVw7.jpg",
    },
    {
        title: 'Third item', description: 'Lorem ipsum', button: "Read More",
        image: "https://i.imgur.com/ZXBtVw7.jpg",
    }
];
const Home = () => {
    return (
        <div className="mt-4">
            <SliderComponent slides={slides} />
        </div>
    );
};

export default Home;
