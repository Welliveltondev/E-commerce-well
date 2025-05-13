import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import close_cart from '../Assets/cart_cross_icon.png'


const CartItems = () => {
  const {getTotalCart, all_product, cartItems, removeToCart } = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>product</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
          <div className='cartitems-format cartitems-format-main'>
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img className='cartitems-remove-icon' src={close_cart} onClick={()=>removeToCart(e.id)} alt="" />
          </div>
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h2>cart totals</h2>
          <div>
            <div className="cartitems-total-item">
              <p>subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping free</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>total</h3>
              <h3>${getTotalCart()}</h3>
            </div>
          </div>
          <button>procedd to check</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" name="" id="" placeholder='Your code' />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
