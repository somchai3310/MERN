import React, { useContext, useEffect, useRef, useState } from "react";
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct";
import displayCurrency from "../helpers/displayCurrency";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import addToCart from "../helpers/addToCart";
import Context from "../context";

const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const [scroll, setScroll] = useState(0);
  const scrollElement = useRef();

  const {fetchUserAddToCart} = useContext(Context)

  const handleAddToCart = async(e,id)=>{
    await addToCart(e, id)
    fetchUserAddToCart()
  }

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    // console.log("categoryProduct ", categoryProduct.data);
    setLoading(false);
    setData(categoryProduct?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };
  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div
        className="flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all"
        ref={scrollElement}
      >
        <button
          className="bg-white shadow-md rounded-full p-1 absolute text-lg left-0 hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-1 absolute text-lg right-0 hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>
        {loading
          ? loadingList.map((el, index) => {
              return (
                <div key={`loading-card-horizon-${index}`} className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex">
                  <div className="bg-slate-300 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse"></div>
                  <div className="p-4 grid w-full gap-2 animate-pulse">
                    <h2 className="bg-slate-300 w-full rounded-full"> </h2>
                    <p className="bg-slate-300 p-1 rounded-full"></p>
                    <div className="flex gap-3 w-full">
                      <p className="text-red-500 font-medium p-1 bg-slate-300 w-full rounded-full"></p>
                      <p className="text-slate-500 line-through p-1 bg-slate-300 w-full rounded-full"></p>
                    </div>
                    <button className="bg-slate-300 w-full rounded-full"></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link to={`product/${product?._id}`} key={product?._id} className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex">
                  <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]">
                    <img
                      src={product?.productImage[0]}
                      alt=""
                      className="object-scale-down h-full hover:scale-125 transition-all"
                    />
                  </div>
                  <div className="p-4 grid">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="text-slate-500 capitalize">
                      {product?.category}
                    </p>
                    <div className="flex gap-3">
                      <p className="text-red-500 font-medium">
                        {displayCurrency(product?.sellingPrice)}
                      </p>
                      <p className="text-slate-500 line-through">
                        {displayCurrency(product?.price)}
                      </p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full cursor-pointer" onClick={(e)=> handleAddToCart(e,product?._id)}>
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default HorizontalCardProduct;
