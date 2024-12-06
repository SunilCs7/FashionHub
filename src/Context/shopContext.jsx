import React, { createContext } from "react";
import data_product from "../Components/Assets/all_product";

export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { data_product };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
export default ShopContextProvider;
