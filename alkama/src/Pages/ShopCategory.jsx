import React, { useContext } from "react";
import{ShopContext} from '../Content/Shopcontext'

const ShopCategory=(props)=>{
 const {all_product}=useContext(ShopContext);

    
    return(
        <div className="shop-category">
         <img src={props.banner} alt="" />  

        </div>
    )
}
export default ShopCategory;