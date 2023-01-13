import React from 'react';
import './section2.scss';
import doc from '../../assets/doc.png'
import base from '../../assets/base.png'
import v from '../../assets/v.png'

const Section2 = () => {
  return (
    <section className='section2'>
        <div className='info-container'>
            <img src={v} alt="" />
            <div className='info'>
                <span>ANALYTICS</span>
                <h3>built-in analytics to track your NFTs</h3>
                <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time</p>
                <button>view our pricing</button>
            </div>
        </div>
        <div className='info-container'>
            <img src={v} alt="" />
            <div className='info'>
                <span>get our app</span>
                <h3>browse NFTs from your smartphone</h3>
                <p>Our Krypto app is the easiest way to keep track of your assets when you’re on the go</p>
                <button>download on iOS</button>
            </div>
        </div>
        <div className='info-container'>
            <img src={doc} alt="" />
            <div className='info'>
                <span>24/7 access</span>
                <h3>sell your NFTs from anywhere at any time</h3>
                <p>With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time</p>
                <button>GET STARTED</button>
            </div>
        </div>

    </section>
  )
}

export default Section2