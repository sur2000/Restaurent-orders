import React, { useEffect } from 'react' 
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";
import logo from '../assets/favicon.png'
import profile from '../assets/girl.jpg' 

import { useStateValue } from "./StateProvider";


const Header = () => { 

  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
   <header>
       <img  className="logo" src={logo} alt='' />
       
       <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
          <p>{cart ? cart.length : ""}</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src={profile} alt='' />
        </div>
        <h2 className="userName">Saya Otonashi</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />

      </div>
   </header>
  )
}

export default Header