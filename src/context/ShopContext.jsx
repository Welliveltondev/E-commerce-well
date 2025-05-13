import { createContext, useState } from 'react'
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null)

export const getDefaulCart = () =>{
  let cart = {}
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaulCart())

  const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalCart = ()=>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let itemInfo = all_product.find((product)=>product.id===Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
      return totalAmount
    }
  }

  const getTotalItems = ()=>{
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem+= cartItems[item]
      }
    }
    return totalItem
  }

  const contextValue = { getTotalItems ,getTotalCart, all_product,cartItems, addToCart, removeToCart}
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider