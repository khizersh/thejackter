import React from "react";
import ImageGallery from "react-image-gallery";
import "./style.css";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/500/600/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
  },
  {
    original: "https://picsum.photos/id/1015/500/600/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
  {
    original: "https://picsum.photos/id/1019/500/600/",
    thumbnail: "https://picsum.photos/id/1019/100/100/",
  },
  {
    original: "https://picsum.photos/id/1018/500/600/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
  },
  {
    original: "https://picsum.photos/id/1015/500/600/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
  {
    original: "https://picsum.photos/id/1018/500/600/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
  },
  {
    original: "https://picsum.photos/id/1015/500/600/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
  {
    original: "https://picsum.photos/id/1019/500/600/",
    thumbnail: "https://picsum.photos/id/1019/100/100/",
  },
  {
    original: "https://picsum.photos/id/1018/500/600/",
    thumbnail: "https://picsum.photos/id/1018/100/100/",
  },
  {
    original: "https://picsum.photos/id/1015/500/600/",
    thumbnail: "https://picsum.photos/id/1015/100/100/",
  },
];
const ProductDescription = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row w-100 ">
          <div className="col-md-6">
            <ImageGallery
              items={images}
              showThumbnails={true}
              showBullets={false}
              showNav={false}
              showPlayButton={false}
              thumbnailPosition={"left"}
              infinite={true}
              showFullscreenButton={false}
            />
          </div>
          <div className="bg-success col-md-6 marginTopAndBottom">
            Typifying our Fabulously British mantra, the Montague Parka is cut
            from British Millerain waxed fabric and designed, sewn and stitched
            in England. This mid-weight style is lined in brushed-cotton
            checksTypifying our Fabulously British mantra, the Montague Parka is
            cut from British Millerain waxed fabric and designed, sewn and
            stitched in England. This mid-weight style is lined in
            brushed-cotton checksTypifying our Fabulously British mantra, the
            Montague Parka is cut from British Millerain waxed fabric and
            designed, sewn and stitched in England. This mid-weight style is
            lined in brushed-cotton checksTypifying our Fabulously British
            mantra, the Montague Parka is cut from British Millerain waxed
            fabric and designed, sewn and stitched in England. This mid-weight
            style is lined in brushed-cotton checksTypifying our Fabulously
            British mantra, the Montague Parka is cut from British Millerain
            waxed fabric and designed, sewn and stitched in England. This
            mid-weight style is lined in brushed-cotton checksTypifying our
            Fabulously British mantra, the Montague Parka is cut from British
            Millerain waxed fabric and designed, sewn and stitched in England.
            This mid-weight style is lined in brushed-cotton checksTypifying our
            Fabulously British mantra, the Montague Parka is cut from British
            Millerain waxed fabric and designed, sewn and stitched in England.
            This mid-weight style is lined in brushed-cotton checks
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
