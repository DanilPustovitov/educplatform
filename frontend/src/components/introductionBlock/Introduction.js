import React from "react";
import "./introduction.scss";

export default function Introduction() {
  return (
    <div className='block'>
        <p className='introheader'>Все життя живи та вчись!</p>

        {/* <img src="section.png"/>
        <img src="section.png"/>
        <img src="section.png"/> */}

        <div>
          <div className='firstP'>
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3999 38.9966C20.8823 39.4459 20.2572 39.6213 19.5591 39.3395C18.843 39.0491 18.5086 38.4793 18.4652 37.7222C18.4618 37.6662 18.4639 37.6096 18.4642 37.5533L18.4605 2.42459C18.4605 1.49719 18.9023 0.851294 19.7059 0.599144C20.6916 0.288308 21.7469 0.946491 21.907 1.97249C21.9327 2.13913 21.9454 2.3075 21.9452 2.47611C21.9452 7.64786 21.9414 12.8193 21.9339 17.9903C21.9332 18.2039 21.9773 18.267 22.2038 18.2664C27.3999 18.2566 32.5951 18.2513 37.7894 18.2507C38.7092 18.25 39.3654 18.7157 39.6114 19.5377C39.899 20.4982 39.2272 21.5563 38.235 21.6989C38.06 21.7236 37.8835 21.7359 37.7068 21.7357C32.5434 21.7355 27.3805 21.7318 22.2178 21.7245C21.9834 21.7241 21.9319 21.7797 21.9319 22.0104C21.9428 27.1912 21.9478 32.3707 21.9469 37.5488C21.9476 38.0873 21.8022 38.5622 21.3999 38.9966Z" fill="#FF5600"/>
                <path d="M1.17551 21.1612C0.749 20.691 0.589316 20.0769 0.841125 19.3972C1.07656 18.7605 1.54708 18.3787 2.23119 18.2869C2.39036 18.2659 2.55072 18.2553 2.71127 18.2552C6.7716 18.2547 10.832 18.2535 14.8926 18.2514C15.1031 18.2511 15.1782 18.2907 15.1751 18.5223C15.1605 19.519 15.1618 20.5146 15.1738 21.5133C15.1755 21.6979 15.1233 21.7358 14.9462 21.7362C10.8294 21.7307 6.71303 21.7299 2.59696 21.7338C2.07594 21.7334 1.61395 21.5915 1.17551 21.1612Z" fill="#FF5600"/>
              </svg>
              <p className='firstPHead'>Онлайн-платформа, яка полегшує навчання</p>
              <p className='firstPText'>Використовуйте цю платформу для того, аби навчатися з будь-якого місця - все, що Вам потрібно</p>
              <p className='firstPTextEnd'>це доступ до Інтернету.</p>
          </div>
          <div className='secondP'>
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3999 38.9966C20.8823 39.4459 20.2572 39.6213 19.5591 39.3395C18.843 39.0491 18.5086 38.4793 18.4652 37.7222C18.4618 37.6662 18.4639 37.6096 18.4642 37.5533L18.4605 2.42459C18.4605 1.49719 18.9023 0.851294 19.7059 0.599144C20.6916 0.288308 21.7469 0.946491 21.907 1.97249C21.9327 2.13913 21.9454 2.3075 21.9452 2.47611C21.9452 7.64786 21.9414 12.8193 21.9339 17.9903C21.9332 18.2039 21.9773 18.267 22.2038 18.2664C27.3999 18.2566 32.5951 18.2513 37.7894 18.2507C38.7092 18.25 39.3654 18.7157 39.6114 19.5377C39.899 20.4982 39.2272 21.5563 38.235 21.6989C38.06 21.7236 37.8835 21.7359 37.7068 21.7357C32.5434 21.7355 27.3805 21.7318 22.2178 21.7245C21.9834 21.7241 21.9319 21.7797 21.9319 22.0104C21.9428 27.1912 21.9478 32.3707 21.9469 37.5488C21.9476 38.0873 21.8022 38.5622 21.3999 38.9966Z" fill="#FF5600"/>
                <path d="M1.17551 21.1612C0.749 20.691 0.589316 20.0769 0.841125 19.3972C1.07656 18.7605 1.54708 18.3787 2.23119 18.2869C2.39036 18.2659 2.55072 18.2553 2.71127 18.2552C6.7716 18.2547 10.832 18.2535 14.8926 18.2514C15.1031 18.2511 15.1782 18.2907 15.1751 18.5223C15.1605 19.519 15.1618 20.5146 15.1738 21.5133C15.1755 21.6979 15.1233 21.7358 14.9462 21.7362C10.8294 21.7307 6.71303 21.7299 2.59696 21.7338C2.07594 21.7334 1.61395 21.5915 1.17551 21.1612Z" fill="#FF5600"/>
              </svg>
              <p className='secondPHead'>Онлайн-платформа, яка об'єднує менторів</p>
              <p className='secondPText'>Використовуйте цю платформу, якщо Ви хочете викладати, хочете працювати як педагог. Якщо Ваша</p>
              <p className='secondPTextEnd'>компанія шукає зручний застосунок, сервіс де зібрано передові технології - Вам до нас.</p>
          </div>
          <div className='thirdP'>
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3999 38.9966C20.8823 39.4459 20.2572 39.6213 19.5591 39.3395C18.843 39.0491 18.5086 38.4793 18.4652 37.7222C18.4618 37.6662 18.4639 37.6096 18.4642 37.5533L18.4605 2.42459C18.4605 1.49719 18.9023 0.851294 19.7059 0.599144C20.6916 0.288308 21.7469 0.946491 21.907 1.97249C21.9327 2.13913 21.9454 2.3075 21.9452 2.47611C21.9452 7.64786 21.9414 12.8193 21.9339 17.9903C21.9332 18.2039 21.9773 18.267 22.2038 18.2664C27.3999 18.2566 32.5951 18.2513 37.7894 18.2507C38.7092 18.25 39.3654 18.7157 39.6114 19.5377C39.899 20.4982 39.2272 21.5563 38.235 21.6989C38.06 21.7236 37.8835 21.7359 37.7068 21.7357C32.5434 21.7355 27.3805 21.7318 22.2178 21.7245C21.9834 21.7241 21.9319 21.7797 21.9319 22.0104C21.9428 27.1912 21.9478 32.3707 21.9469 37.5488C21.9476 38.0873 21.8022 38.5622 21.3999 38.9966Z" fill="#FF5600"/>
                <path d="M1.17551 21.1612C0.749 20.691 0.589316 20.0769 0.841125 19.3972C1.07656 18.7605 1.54708 18.3787 2.23119 18.2869C2.39036 18.2659 2.55072 18.2553 2.71127 18.2552C6.7716 18.2547 10.832 18.2535 14.8926 18.2514C15.1031 18.2511 15.1782 18.2907 15.1751 18.5223C15.1605 19.519 15.1618 20.5146 15.1738 21.5133C15.1755 21.6979 15.1233 21.7358 14.9462 21.7362C10.8294 21.7307 6.71303 21.7299 2.59696 21.7338C2.07594 21.7334 1.61395 21.5915 1.17551 21.1612Z" fill="#FF5600"/>
              </svg>
              <p className='thirdPHead'>Онлайн-платформа, де шукають робітників</p>
              <p className='thirdPText'>Використовуйте цю платформу, якщо Вам потрібні нові висококваліфіковані працівники, прогрес та</p>
              <p className='thirdPTextEnd'>відгуки кого, Ви можете подивитись у відповідному розділі.</p>
          </div>
          <img className='mainImage' src='mainpagephoto.png'/>
          <div className='trialButton'><p>Спробуйте безкоштовний 30-денний пробний період</p></div>
        </div>




    </div>
  );
}
