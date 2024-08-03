import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../common";
import Context from "../context";
import displayCurrency from "../helpers/displayCurrency";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const loadingCart = new Array(context.cartProductCount).fill(null);

  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log("cart --->", responseData);
    if (responseData.success) {
      setData(responseData?.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="text-center text-lg my-3">
        {data.length === 0 && !loading && (
          <p className="bg-white py-5">No Data</p>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
        {/* view product in cart */}
        <div className="w-full max-w-3xl">
          {loading
            ? loadingCart.map((el) => {
                return (
                  <div
                    key={el + "Add to cart loading"}
                    className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
                  ></div>
                );
              })
            : data.map((product, index) => {
                return (
                  <div
                    key={product?._id}
                    className="w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]"
                  >
                    <div className="w-32 h-32 bg-slate-200 ">
                      <img src={product?.productId?.productImage[0]}  className="w-full h-full object-scale-down mix-blend-multiply p-1" alt=""/>
                    </div>
                    <div className="px-4 py-2">
                      <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">{product?.productId?.productName}</h2>
                      <p className="text-slate-500 capitalize">{product?.productId?.category}</p>
                      <p className="text-red-600 font-medium text-lg">{displayCurrency(product?.productId?.sellingPrice)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button className="border border-red-600 text-red-600 hover:bg-red-500 hover:text-white rounded w-6 h-6 flex justify-center items-center ">-</button>
                        <span>{product?.quantify}</span>
                        <button className="border border-red-600  text-red-600 hover:bg-red-500 hover:text-white rounded w-6 h-6 flex justify-center items-center">+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        {/* Summary */}
        <div className="mt-5 lg:mt-0 w-full max-w-sm">
          {loading ? (
            <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
          ) : (
            <div className="h-36 bg-slate-200">Total</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
