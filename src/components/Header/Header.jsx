import React, { useState } from 'react'
import './Header.scss'
import line1 from '../../assets/Line1.png'
import line2 from '../../assets/Line2.png'
import line3 from '../../assets/Line3.png'
const Header = () => {
  const [open,setOpen]= useState(false)
  return (
    <header>
        <div className='header-container'>
        <h1>KRYPTO</h1>
        <div className={open? 'active-lines' : 'lines'} onClick={()=>{setOpen(current=>!current)}} data-testid='lines'>
          <img src={line1} alt="" />
          <img src={line2} alt="" data-testid='line2' />
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
        
         <nav className={open? 'active-menu' : 'menu'} data-testid='menu'>
           <ul>
            <li className={open? 'active-list' : 'list'}>about</li>
            <li className={open? 'active-list' : 'list'}>pricing</li>
            <li className={open? 'active-list' : 'list'}>contact</li>
            <li className={open? 'active-list' : 'list'}>buy nfts</li>
           </ul>
         </nav>  
      
    </header>
  )
}

export default Header