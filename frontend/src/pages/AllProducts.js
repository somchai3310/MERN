import React, { useState } from "react";
import UploadProduct from "../components/UploadProduct";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  console.log('openUploadProduct',openUploadProduct);
  return (
    <div>
      <div className="bg-white py-4 px-2 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Products</h2>
        <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full"
        onClick={()=> setOpenUploadProduct(true)}>
          Upload Product
        </button>
      </div>

      {/* upload product component */}
      {openUploadProduct && <UploadProduct onClose={()=> setOpenUploadProduct(false)} />}
    </div>
  );
};

export default AllProducts;
