import React from 'react'
import mir from '../../assets/mir.png'
import tech from '../../assets/tech.png'
import FastCompany from '../../assets/FastCompany.png'
import Forbes from '../../assets/Forbes.png'
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <h2>Featured on</h2>
      <div className='brand'>
        <img src={tech} alt="" />
        <img src={FastCompany} alt="" />
        <img src={mir} alt="" />
        <img src={Forbes} alt="" />
      </div>

    </div>
  )
}

export default Featured