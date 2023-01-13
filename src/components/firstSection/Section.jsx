import React from 'react'
import screen from '../../assets/screen.png';
import './section.scss'
const Section = () => {
  return (
    <section className='first-section'>
        <div className='right-side'>
        <img src={screen} alt="" />
        </div>
        <div className='left-side'>
            <h2>discover and collect <span>rare</span> NFTs</h2>
            <p>The most secure marketplace for buying and selling unique crypto assets</p>
            <div className='buttons'>
                <button>buy nfts</button>
                <button>sell nfts</button>
            </div>

        </div>

    </section>
  )
}

export default Section