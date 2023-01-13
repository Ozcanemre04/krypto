import React from 'react'
import './footer.scss';
import vector from '../../assets/Vector.png'
const Footer = () => {
  return (
    <footer>
      <h3>krypto</h3>
      <div className='footer-container'>
        <div className='footer'>
          <div className='each-column'>
            <span>krypto</span>
            <div className='column-element'>
              <p>Home</p>
              <p>About</p>
              <p>Buy NFTs</p>
              <p>Sell NFTs</p>
            </div>
          </div>

          <div className='each-column'>
          <span>Market</span>
            <div className='column-element'>
              <p>Browse NFTs</p>
              <p>Buy NFTs</p>
              <p>Sell NFTs</p>
            </div>
          </div>

          <div className='each-column'>
          <span>contact</span>
            <div className='column-element'>
              <p>Email</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>

        <div className='newsletter'>
             <h3>join our newsletter</h3>
             <div className='input-container'>
              <input type="text" placeholder='email address' />
              <button>
                <img src={vector} alt="" />
                <span>Submit</span>
              </button>
             </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer