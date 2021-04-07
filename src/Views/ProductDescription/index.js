import { FormGroup, Input, Label } from "reactstrap";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Footer from "../../Components/Footer";
import DescriptionTabs from "../../Components/DescriptionTabs";
import { CURRENCY } from "../../constant";
import "./style.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/2000/2000/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
  },
  {
    original: "https://picsum.photos/id/1015/2000/2000/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
  {
    original: "https://picsum.photos/id/1019/2000/2000/",
    thumbnail: "https://picsum.photos/id/1019/100/100/",
  },
  {
    original: "https://picsum.photos/id/1018/2000/2000/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
  },
  {
    original: "https://picsum.photos/id/1015/2000/2000/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
  {
    original: "https://picsum.photos/id/1018/2000/2000/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
  },
  {
    original: "https://picsum.photos/id/1015/2000/2000/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
  {
    original: "https://picsum.photos/id/1019/2000/2000/",
    thumbnail: "https://picsum.photos/id/1019/100/100/",
  },
  {
    original: "https://picsum.photos/id/1018/2000/2000/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
    originalClass: "hello",
  },
  {
    original: "https://picsum.photos/id/1015/2000/2000/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
];
const ProductDescription = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row w-100 ">
          <div className="col-md-6  d-flex justify-content-center align-items-center">
            <ImageGallery
              items={images}
              showThumbnails={true}
              showBullets={false}
              showNav={false}
              showPlayButton={false}
              thumbnailPosition={"left"}
              infinite={true}
              useBrowserFullscreen={true}
              showFullscreenButton={true}
            />
          </div>
          <div className="col-md-6 marginTopAndBottom">
            <p className="product-title">VARIABLE PRODUCT</p>
            <p className="product-price mt-1">{CURRENCY}70.00 - {CURRENCY}80.00</p>
            <p className="product-description mt-1">
              A-ha Shop is a very slick and clean e-commerce template with
              endless possibilities.
            </p>
            <FormGroup>
              <Label for="exampleSelect" className="attributes-heading">
                Color
              </Label>
              <Input
                className="select-menu"
                type="select"
                name="Color"
                id="exampleSelect"
              >
                <option className="custom-option-description" disabled>
                  Choose an Option
                </option>
                <option className="custom-option-description">Black</option>
                <option className="custom-option-description">Green</option>
                <option className="custom-option-description">Yellow</option>
                <option className="custom-option-description">Purple</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="size" className="attributes-heading">
                SIZE
              </Label>
              <Input
                className="select-menu"
                type="select"
                name="Color"
                id="size"
              >
                <option className="custom-option-description" disabled>
                  Choose an Option
                </option>
                <option className="custom-option-description">Sm</option>
                <option className="custom-option-description">L</option>
                <option className="custom-option-description">M</option>
                <option className="custom-option-description">XL</option>
              </Input>
            </FormGroup>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <div className="custom-box">-</div>
                <div className="custom-box">1</div>
                <div className="custom-box">+</div>
              </div>
              <div>
                <button className="btn btn-info ">Add to Cart</button>
              </div>
            </div>
            <div>
              <button className="btn btn-dark btn-lg mt-3">Buy Now</button>
            </div>
            <div className="mt-3">
              <p>SKU: ahoooo1</p>
              <div className="product-description-links">
                Categories: <span>Bags</span>,<span>Clothes Women</span>
              </div>
              <div className="product-description-links">
                Tags: <span>Dress</span>,<span>Women</span>
              </div>
            </div>
            <div className="mt-3 d-flex">
              Share :{" "}
              <span className="description-social-icon-wrapper">
                <FaFacebookF className="description-social-icon" />
              </span>
              <span className="description-social-icon-wrapper">
                <FaPinterestP className="description-social-icon" />
              </span>
              <span className="description-social-icon-wrapper">
                <FaTwitter className="description-social-icon" />
              </span>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <section className="mt-5">
          <DescriptionTabs />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDescription;
