//needs for api calling -> axios
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  // state
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [dummy, setDummy] = useState("");

  // data fetch funtion
  const handleProduct = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products); //make sure enter same name as data in api if you enter capital letter it will gives you error
    setDummy(res.data.products); //make sure enter same name as data in api if you enter capital letter it will gives you error
    // why res.data.products -> in api they have multiple data if we want particular thing data so this
  };

  // user input store funtion
  const getSearch = (e) => {
    setSearch(e.target.value);
    // this function is use for get user input from search bar and input will store in state
  };

  // handleSearch funtion
  const handleSearch = () => {
    setProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()),
      ),
    );
    //in that function use we are compare user input to products details if is the same data its gives new array
  };
  const handleCategoryFilter = async (e) => {
    if (e.target.value == "all") {
      await handleProduct();
    } else {
      setProducts(
        products.filter((product) => product.category == e.target.value),
      );
    }
  };

  const handlePriceFilter = (e) => {
    console.log(e.target.value);
    setProducts(
      products.filter((product) => product.price <= Number(e.target.value)),
    );
  };

  // funtion calling
  useEffect(() => {
    handleProduct();
  }, []);
  // when Component update this funtion will call all time

  return (
    <>
      <div className="container">
        {/* search */}
        <div className="mt-4 d-flex gap-2">
          <input
            onChange={getSearch}
            type="text"
            className="border-2 border-warning py-1 rounded-3 w-25 "
          />
          <button
            onClick={handleSearch}
            className=" btn rounded-2 btn-md btn-warning"
          >
            Search
          </button>
          <select
            className="btn btn-warning btn-sm"
            onChange={handleCategoryFilter}
          >
            <option value={"all"}>All</option>
            <option value={"beauty"}>Beauty</option>
            <option value={"fragrances"}>Fragrances</option>
            <option value={"furniture"}>Furniture</option>
            <option value={"groceries"}>Groceries</option>
          </select>
          <button onChange={handlePriceFilter} className="btn btn-warning">
            <input type="range" min={1} max={2500} />
          </button>
          <button
            onClick={() => {
              handleProduct();
            }}
            className=" btn rounded-2 btn-md btn-warning"
          >
            Clear Filter
          </button>
        </div>
        {/* product display */}
        <div className="container row justify-content-evenly gap-3 mt-5">
          {products.map((product, i) => {
            return (
              <div
                className="card text-start shadow"
                key={i}
                style={{ width: "18rem" }}
              >
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="..."
                />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{product.title}</li>
                  <li className="list-group-item">{product.category}</li>
                  <li className="list-group-item">${product.price}/-</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
