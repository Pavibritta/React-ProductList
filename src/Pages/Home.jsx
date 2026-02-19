import React, { useState } from "react";
import Carditems from "../Components/Carditems";
import handbag from "../assets/Images/bag.avif";
import coolingGlass from "../assets/Images/cooling glass.avif";
import shoes from "../assets/Images/shoes.avif";
import watch from "../assets/Images/watch.avif";
import waterBottle from "../assets/Images/waterbottle.avif";

const Home = ({ userName }) => {
  const productsList = [
    {id:1, name: "Handbag", price: 500, image: handbag },
    {id:2, name: "Cooling Glass", price: 300, image: coolingGlass },
    {id:3, name: "Shoes", price: 1000, image: shoes },
    {id:4, name: "Watch", price: 800, image: watch },
    {id:5, name: "WaterBottle", price: 600, image: waterBottle },
  ];
  return (
    <>
      <section className=" max-w-8xl mx-auto text-center px-6 py-20 bg-gray-800 text-white relative">
        <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Welcome {userName}!
        </h1>

        <Carditems products={productsList} />
      </section>
    </>
  );
};

export default Home;
