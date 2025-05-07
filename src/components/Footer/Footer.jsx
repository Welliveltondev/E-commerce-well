import { Link } from 'react-router-dom'

import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import intagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo da footer" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li><Link to="#" style={{ textDecoration: 'none'}}>Company</Link></li>
        <li><Link style={{ textDecoration: 'none'}}>Product</Link></li>
        <li><Link style={{ textDecoration: 'none'}}>Offices</Link></li>
        <li><Link style={{ textDecoration: 'none'}}>About</Link></li>
        <li><Link style={{ textDecoration: 'none'}} >Contact</Link></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={intagram_icon} alt="logo do instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="logo do pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="logo do whatsapp" />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p> &COPY;  {date} - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer