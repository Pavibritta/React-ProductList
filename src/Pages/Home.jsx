import React, { useState } from "react";
import Carditems from "../Components/Carditems";
import handbag from "../assets/Images/bag.avif";
import coolingGlass from "../assets/Images/cooling glass.avif";
import shoes from "../assets/Images/shoes.avif";
import watch from "../assets/Images/watch.avif";
import waterBottle from "../assets/Images/waterbottle.avif";

const Home = ({ userName }) => {
  const [searchingProduct, setSearchingProduct] = useState("");
  const [productList, setProductList] = useState([
    { id: 1, name: "Handbag", price: 500, image: handbag },
    { id: 2, name: "Cooling Glass", price: 300, image: coolingGlass },
    { id: 3, name: "Shoes", price: 1000, image: shoes },
    { id: 4, name: "Watch", price: 800, image: watch },
    { id: 5, name: "WaterBottle", price: 600, image: waterBottle },
  ]);
  const [notMatched, setNotMatched] = useState(false);
  const handleFilter = (e) => {
    const value = e.target.value;
    setSearchingProduct(value);

    if (value === "") return;

    const filteredProducts = productList.filter((product) => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    });
    if (filteredProducts.length == 0) {
      setNotMatched(true);
      return setProductList([]);
    }
    setProductList(filteredProducts);
  };
  return (
    <>
      <section className=" max-w-8xl mx-auto text-center px-6 py-20 bg-gray-800 text-white relative">
        <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-10 mb-2">
          Welcome {userName}!
        </h1>
        <input
          type="text"
          placeholder="Search by product name"
          className="max-w-3xl w-full bg-white text-gray-600 px-3 py-2 outline-none placeholder:text-gray-600 rounded shadow mx-auto"
          onChange={(e) => handleFilter(e)}
        />
        {notMatched && (
          <p className="text-xl text-left bg-linear-to-r from-red-400 to-red-500 bg-clip-text text-transparent mt-5 mb-2">
            No Results Found
          </p>
        )}
        <Carditems products={productList} />
      </section>
    </>
  );
};

export default Home;
