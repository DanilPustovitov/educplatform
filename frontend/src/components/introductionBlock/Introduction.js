import React from 'react'
import './introduction.scss';

export default function Introduction() {
  return (
    <div className='block'>
        <p className='introheader'>Онлайн платформа, яка полегшує навчання</p>

        {/* <img src="section.png"/>
        <img src="section.png"/>
        <img src="section.png"/> */}

        <div className='moreInfo'>
          <p className='moreInfoText'>Більше інформації</p> 
          <img className='moreInfoIMG' src="arrow.png"/>
        </div>



    </div>
  )
}

