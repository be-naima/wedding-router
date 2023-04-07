import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({product,removeBtn,total}) => {
    
    return (
        <div className='mt-4 '>
           <div className='cart'>
           <p className='fw-bold fs-6'>{product.name}</p>
            <button onClick={()=>removeBtn(product.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            
           </div>
          
        </div>
    );
};

export default Cart;