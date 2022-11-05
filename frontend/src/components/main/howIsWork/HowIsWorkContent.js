import React from "react";
import { Image } from "react-bootstrap";

export default function HowIsWorkContent({ url, title, isTop }) {
  return (
    <div className={`home-image-container ${isTop? 'is-top' : 'is-not-top'}`}>
      <div className='home-work-image-content'>
        <Image  className="image" alt={title} src={url} />
        <p className="title">{title}</p>
      </div>
    </div>
  );
}
