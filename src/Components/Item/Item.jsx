import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <>
      <div className="itemcontainer">
        <div className="itemimage">
          <img src={props.image} alt="item image" />
          <p>{props.name}</p>
          <div className="item-price">
            <div className="item-price-new">{props.new_price}</div>
            <div className="item-price-old">{props.old_price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
