import React from 'react';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

const Favorite = () => {
    const {favorite} = useSelector((s) => s)
    return (
      <div id="product">
        <div className="container">
          <div className="product flex flex-wrap gap-20 items-center my-10">
            {favorite.map((el) => (
              <ProductCard el={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Favorite;