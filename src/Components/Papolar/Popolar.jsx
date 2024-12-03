import React from "react";
import "./Popolar.css";
import data_products from "../Assets/data";
import Item from "../Item/Item";

const Popolar = () => {
  return (
    <>
      <div className="popular">
        <h1>POPULAT IN WOMEN</h1>
        <hr />
        <div className="popular_item">
          {data_products.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popolar;