import React, { useContext, useEffect, useState } from "react";
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct";
import displayCurrency from "../helpers/displayCurrency";
import { Link } from "react-router-dom";
import addToCart from "../helpers/addToCart";
import Context from "../context";
import scrollTop from "../helpers/scrollTop";

// แนะนำสินค้าเพิ่มเติม จาก สินค้าที่กดเข้าไปดู
const CategoryWiseProductDisplay = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    console.log("categoryProduct ", categoryProduct.data);
    setLoading(false);
    setData(categoryProduct?.data);
  };
  // const reRender = () => {
  //   // re-rendered
  //   this.forceUpdate()
  // };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-x-scroll scrollbar-none transition-all">
        {loading
          ? loadingList.map((product, index) => {
              return (
                <div
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow"
                  key={index}
                >
                  <div className="bg-slate-300 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                  <div className="p-4 grid gap-3 animate-pulse">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 bg-slate-300 rounded-full">
                      {" sf"}
                    </h2>
                    <p className="text-slate-500 capitalize p-1 py-2 bg-slate-300 rounded-full"></p>
                    <div className="flex gap-3">
                      <p className="text-red-500 font-medium p-1 py-2 bg-slate-300 w-full rounded-full"></p>
                      <p className="text-slate-500 line-through p-1 py-2 bg-slate-300 w-full rounded-full"></p>
                    </div>
                    <button className="bg-slate-300 p-3 rounded-full"></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  to={`/product/${product?._id}`}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow"
                  onClick={scrollTop}
                  key={product?._id}
                >
                  <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
                    <img
                      src={product?.productImage[0]}
                      alt=""
                      className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
                    />
                  </div>
                  <div className="p-4 grid gap-3">
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
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full cursor-pointer"
                      onClick={(e) => handleAddToCart(e, product?._id)}
                    >
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

export default CategoryWiseProductDisplay;
