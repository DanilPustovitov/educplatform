import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <div className='header'>
       <span className='logo'><p className='logotext'>Логотип</p></span>
       <span className='searchBtn'> <img src='searchico.png'/></span>
       <span className='languageBtn'> <img src='languageico.png'/></span>
       <span className='authBtn'> <img src='joinus.png'/></span>
    </div>
  )
}
