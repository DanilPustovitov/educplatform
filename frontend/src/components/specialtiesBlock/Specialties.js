import React from 'react'
import './specialties.scss'

export default function Specialties() {
  return (
    <div className='specialtiesBlock'>
        <p className='mainHeader'>Знайдіть знання на свій смак</p>
        <p className='youWillFind'>В НАС ВИ ЗНАЙДЕТЕ</p>
        <p className='specialtyNumber'>15+</p>
        <p className='specialtiesTxt'>СПЕЦІАЛЬНОСТЕЙ</p>

        <ul className='listOnLeft'>
          <li>ІТ-сфера <img className='specialtyOrange' src='specialtyorange.png' /></li>
          <li>Бізнес <img className='specialtyOrange' src='specialtyorange.png' /></li>
          <li>Право <img className='specialtyOrange' src='specialtyorange.png' /></li>
          <li>Економіка <img className='specialtyOrange' src='specialtyorange.png' /></li>
          <li>Маркетинг <img className='specialtyOrange' src='specialtyorange.png' /></li>
        </ul>

        <ul  className='listOnRight'>
          <li>Менеджмент <img className='specialtyOrange' src='specialtyblue.png' /></li>
          <li>Філологія <img className='specialtyOrange' src='specialtyblue.png' /></li>
          <li>Психологія <img className='specialtyOrange' src='specialtyblue.png' /></li>
          <li>Фінанси <img className='specialtyOrange' src='specialtyblue.png' /></li>
          <li>Культура <img className='specialtyOrange' src='specialtyblue.png' /></li>
        </ul>
    </div>
  )
}
