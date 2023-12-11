import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap'
import'./Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from'../Assets/cart_icon.png';
import arrow_icon from'../Assets/cart_cross_icon.png';
import bars from '../Assets/bars-solid.svg'

import { Link,} from "react-router-dom";
const Navbar=()=>{
    const[clicked,setClicked]=useState(false)
    const[menu,setMenu]=useState("shop");
    const handleonclicked=()=>{
        setClicked(!clicked)
    }
    return(
        <section className="navbar-section">
         <div className="navbar">
        
            <div className="nav-logo">

                <img src={logo} alt=""/>
                <p>SHOPPER</p>

            </div>
            <div className="menu-icon" onClick={handleonclicked}>
                <i className={clicked?"fa fa-times":"fa fa-bars"}></i>
            </div>
           <ul className={clicked ?"nav-menu ":"nav-menu close"}>
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}}to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>   
            <li onClick={()=>{setMenu("product")}}> <Link style={{textDecoration:'none'}}to='/product'>Product</Link>{menu==="product"?<hr/>:<></>}</li>   
            <li onClick={()=>{setMenu("woman")}}><Link style={{textDecoration:'none'}}to='/woman'>Woman</Link>{menu==="woman"?<hr/>:<></>}</li>   
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>kid</Link>{menu==="kids"?<hr/>:<></>}</li>   

           </ul>
           <div className="nav-login-cart">
           <Link to='/login'>   <button> Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
           </div>
         </div>
         </section>
    )
}
export default Navbar;