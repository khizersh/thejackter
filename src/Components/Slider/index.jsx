import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useHistory } from "react-router";

import "./style.css";

const SliderComponent = (props) => {
  let history = useHistory();
  return (
      <Slider autoplay={3000}>
        {props.slides &&
          props.slides.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item?.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item?.title}</h1>
                <p>{item?.description}</p>
                <button className="slider-button" onClick={() => history.push(item?.url)}>Read More</button>
              </div>
            </div>
          ))}
      </Slider>
  );
};

export default SliderComponent;
