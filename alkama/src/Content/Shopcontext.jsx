import React, { createContext } from "react";
import all_product from '../Component/Assets/all_product';

export const ShopContext= createContext(null);
const ShopContextProvider=(props)=>{
    const contexValue={all_product};

    return(
        <ShopContext.Provider value={contexValue}>
            {props.childre}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;