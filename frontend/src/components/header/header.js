import React from "react";
import { Image } from "react-bootstrap";
import JoinIcon from '../../assets/svg/joinUs.svg'
import "./header.scss";

export default function Header() {
  return (
    <div className="header-container">
     <h1 className="logo-text">Логотип</h1>
      <div className="header-right">
        <div className="search-content">
          <div className="searchBtn">
            <img src="searchico.png" alt="search" />
          </div>
          <div className="languageBtn">
            <img src="languageico.png" alt="languageico" />
          </div>
        </div>
        <div className="authBtn">
          <span className="join-text">Join us</span>
          <Image src={JoinIcon} alt="JoinIcon" />
        </div>
      </div>
    </div>
  );
}
