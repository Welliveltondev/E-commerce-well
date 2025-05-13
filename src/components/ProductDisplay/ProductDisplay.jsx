import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_icon_dull from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
  const {product} = props
  const {addToCart} = useContext(ShopContext)

  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="procuctdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className='producdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h2>{product.name}</h2>
          <div className="prductdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon_dull} alt="" />
          <p>(122)</p>
          </div>
          <div className="producdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Esse alias laboriosam optio. Magni provident eaque
            temporibus corrupti cum commodi quidem.
          </div>
          <div className="productdisplay-right-size">
            <h3>Selec size</h3>
            <div className="productdisplay-right-sizes">
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
          <p className='productdisplay-right-category'> <span>Category</span>Women, T-shirt, Top Crop</p>
          <p className='productdisplay-right-category'> <span>Tags</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay