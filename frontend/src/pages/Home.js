import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct/>

      <HorizontalCardProduct category={'airpodes'} heading={"Top's Airpods"}/>
      <HorizontalCardProduct category={'earphones'} heading={"Popular's Earphones"}/>
      <HorizontalCardProduct category={'watches'} heading={"Popular's Watches"}/>


      <VerticalCardProduct category={'mobiles'} heading={'Mobiles vetical card'}/>
      <VerticalCardProduct category={'Mouse'} heading={'Mouse vetical card'}/>
      <VerticalCardProduct category={'Mouse'} heading={'Mouse vetical card'}/>
      <VerticalCardProduct category={'televisions'} heading={'Televisions vetical card'}/>
      <VerticalCardProduct category={'camera'} heading={'Camera vetical card'}/>
      <VerticalCardProduct category={'speakers'} heading={'speakers'}/>
      <VerticalCardProduct category={'refrigerator'} heading={'refrigerator'}/>
      <VerticalCardProduct category={'printers'} heading={'Printers'}/>
      <VerticalCardProduct category={'trimmers'} heading={'Trimmers'}/>
    </div>
  );
};

export default Home;
