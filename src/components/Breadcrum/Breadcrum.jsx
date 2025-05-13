import './BreadCrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const BreadCrum = (props) => {
  const {product} = props;
  return (
    <div className="breadcrum">
      Home<img src={arrow_icon} alt="" />
      Shop<img src={arrow_icon} alt="" />
      <img src={arrow_icon} alt="" />
      <img src={arrow_icon} alt="" />
      <img src={arrow_icon} alt="" />
    </div>
  )
}

export default BreadCrum