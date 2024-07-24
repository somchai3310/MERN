import React, { useState } from "react";
import image1 from "../assets/banner/img1.webp";
import image2 from "../assets/banner/img2.webp";
import image3 from "../assets/banner/img3.jpg";
import image4 from "../assets/banner/img4.jpg";
import image5 from "../assets/banner/img5.webp";

import image1Mobile from "../assets/banner/img1_mobile.jpg";
import image2Mobile from "../assets/banner/img2_mobile.webp";
import image3Mobile from "../assets/banner/img3_mobile.jpg";
import image4Mobile from "../assets/banner/img4_mobile.jpg";
import image5Mobile from "../assets/banner/img5_mobile.png";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const desktopImages = [image1, image2, image3, image4, image5];
  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];
  const nextImage = () => {
    console.log('desktopImages.length-1', desktopImages.length-1);
    console.log('currentImage', currentImage);
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((preve) => preve + 1);
    } else {
      setCurrentImage(0)
    }
  };
  const preveImage = () => {
    console.log('desktopImages.length-1', desktopImages.length-1);
    console.log('currentImage', currentImage);
    if (currentImage !== 0) {
      setCurrentImage((preve) => preve - 1);
    } else if(currentImage === 0) {
      setCurrentImage(desktopImages.length - 1 )
    }
  };
  return (
    <div className="container mx-auto px-4 rounded-md">
      <div className="h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full flex items-center">
          <div className="flex justify-between w-full text-2xl px-2 opacity-25">
            <button
              onClick={preveImage}
              className="bg-white shadow-md rounded-full p-1"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className="bg-white shadow-md rounded-full p-1"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="flex  h-full w-full overflow-hidden">
          {desktopImages.map((imageUrl, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all"
                key={imageUrl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageUrl} alt="" className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
