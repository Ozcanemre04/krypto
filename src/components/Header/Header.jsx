import React from 'react'
import './Header.scss'
import line1 from '../../assets/Line1.png'
import line2 from '../../assets/Line2.png'
import line3 from '../../assets/Line3.png'
const Header = () => {
  return (
    <header>
        <div className='header-container'>
        <h1>KRYPTO</h1>
        <div className='lines'>
          <img src={line1} alt="" />
          <img src={line2} alt="" />
          <img src={line3} alt="" />
        </div>
        <nav>
          <ul>
            <li>about</li>
            <li>pricing</li>
            <li>contact</li>
            <li><span></span>buy nfts</li>
          </ul>
        </nav>
        </div>

    </header>
  )
}

export default Header