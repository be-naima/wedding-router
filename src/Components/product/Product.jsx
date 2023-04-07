import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({decor,addCart}) => {
    const {id,name,picture,price,short_description} = decor;
    return (
        
            <div className="col">
    <div className="card">
      <img src={picture} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{short_description}</p>
        <p className='fw-bold text-warning'>Price: <span>${price}</span></p>
        <div>
        <button onClick={()=>addCart(decor)} className='fw-bold'>Add to Cart  <span></span> <FontAwesomeIcon icon={faCartShopping} /></button>
        <ToastContainer />
        </div>
      </div>
    </div>
  </div>
       
    );
};

export default Product;