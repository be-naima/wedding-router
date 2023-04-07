import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
       
        <nav className="d-flex nav">
            
          
          
           <div>
           <img className='logoPic me-3 py-2' src="https://static.vecteezy.com/system/resources/thumbnails/012/027/862/small_2x/cute-cartoon-young-wedding-couple-wreath-logo-in-cherry-blossom-wreath-png.png" alt="" /> <a className="fw-bold fs-5 fst-italic">Save The Date</a>
           </div>
           
           <div className=''>
           <Link to="/">Home</Link>
           <Link to="/shop">Shop</Link>
           <Link to="Gallery">Gallery</Link>
           </div>
        
          
        
      </nav>
    );
};

export default Header;