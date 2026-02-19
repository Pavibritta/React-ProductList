import React, { useState } from "react";

const Carditems = ({ products }) => {
  console.log(products);
  const [count, setCount] = useState({});
  const handleAdd = (id) => {
    setCount((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };
  const handleRemove = (id) => {
    setCount((prev) => ({ ...prev, [id]: Math.max(1, prev[id] || 1) - 1 }));
  };
  return (
    <>
      <section className="max-w-6xl bg-gray-800 text-white mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Products List</h3>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 cursor-pointer"
          id="output-div"
        >
          {products.map((product, index) => {
            return (
              <div
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                key={index}
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-44 object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-green-600">
                    ₹{product.price * (count[product.id] || 1)}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 active:scale-95 transition cart-btn cursor-pointer"
                      onClick={() => handleAdd(product.id)}
                    >
                      Add
                    </button>
                    <p className="text-lg font-semibold text-gray-800">
                      {count[product.id] || 1}
                    </p>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 active:scale-95 transition remove-btn cursor-pointer flex items-center justify-center"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Carditems;
