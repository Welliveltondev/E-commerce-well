import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular">
      <h2>POPULAR IN WOMENS</h2>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) =>{
          return <Item 
          key={i} 
          id={item.id} 
          name={item.name} 
          image={item.image} 
          new_price={item.new_price}
          old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular