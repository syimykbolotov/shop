import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../data";
import ProductCard from "../ProductCard";

const Product = () => {
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();
  const getProduct = (main) => {
    dispatch({ type: "GET_PRODUCT", payload: main });
  };
  useEffect(() => {
    getProduct(data);
  }, []);
  return (
    <div id="product">
      <div className="container">
        <div className="product flex flex-wrap gap-20 items-center my-10">
          {products.map((el) => (
              <ProductCard el={el} key={el.id} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Product;
