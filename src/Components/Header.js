import React from 'react' 
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";
import logo from '../assets/favicon.png'


const Header = () => {
  return (
   <header>
       <img  className="logo" src={logo} alt='' />
       
       <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>5</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="" alt='' />
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