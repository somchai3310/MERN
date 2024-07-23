import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayCurrency from "../helpers/displayCurrency";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div className="bg-white p-4 rounded ">
      <div className="w-40 ">
        <img
          src={data?.productImage[0]}
          width={100}
          height={100}
          alt=""
          className="w-fit mx-auto"
        />
        <h1>{data?.productName}</h1>

        <div className="">
          <p className="font-semibold">
            {
              // displayCurrency(data.sellingPrice,'Rupee')
              displayCurrency(data.sellingPrice)
            }
          </p>
          <div
            className="w-fit ml-auto p-2 bg-green-200 hover:bg-green-600 rounded-full hover:text-white cursor-pointer"
            onClick={() => setEditProduct(true)}
          >
            <MdOutlineModeEdit />
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
