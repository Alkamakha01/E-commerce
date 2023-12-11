import React from "react";
import './Offers.css';
import exculsive_image from '../Assets/exclusive_image.png';
const Offers=()=>{
    return(

          <section className="offres-section">
             <div className="offers">
                <div className="offer-left">
                 <h1>Exclusive</h1>
                 <h1>Offers For You</h1>
                 <p>ONLY ON BEST SELLERS PRODUCTS</p>
                 <button>Cheack Now</button>
                </div>
                <div className="offer-right">
                    <img src={exculsive_image} alt="" />

                </div>

            </div>
          </section>
    )
}
export default Offers;