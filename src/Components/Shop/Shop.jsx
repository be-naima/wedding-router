import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Shop = () => {
    const decors = useLoaderData()
    const [cart,setCart] = useState([])
    const addCart = (decor) =>{
        const exist = cart.find(pd => pd.id === decor.id)
        if(exist){
            toast("You have already added this!")
        }
        else{
            const newCart = [...cart,decor]
            setCart(newCart)
        }
       
    }
    const removeBtn = (id) =>{
        
        const remaining = cart.filter(pd => pd.id !== id )
        
        setCart(remaining)
    }
    const clearCart = () =>{
        setCart([])
    }
    let mesaage; 
    if(cart.length !== 0){
        
       mesaage  = <button onClick={clearCart} className='mt-5 bg-black'>Clear Cart</button>;
    }
    let total =0;
    for(const i of cart){
        total = total + i.price 
    }
    console.log(total)
    return (
       <div className='mt-5 text-center'>
            <div className='row row-cols-1 row-cols-md-4 g-4' >
           
           <div className='col-lg row row-cols-1 row-cols-md-3 g-4'>
               {
                   decors.map(decor=><Product
                     key = {decor.key}
                     decor = {decor}
                     addCart = {addCart}
                   ></Product>)
                   
               }
           </div>
           <div className='col mt-5 card'>
           <h2>Order Summery</h2>
           <h4 className='mt-4 title py-2 rounded'>Total Items: {cart.length}</h4>
                {
                    cart.map(product => <Cart
                    product ={product}
                    removeBtn = {removeBtn}
                    total = {total}
                    ></Cart>)
                }
             <h4 className='mt-4 fw-bold fs-6 bg-warning py-2 rounded'>Total: ${total}</h4>
             {mesaage}
           </div>
          
       </div>
       </div>
    );
};

export default Shop;