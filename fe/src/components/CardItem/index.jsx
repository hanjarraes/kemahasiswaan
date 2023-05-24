import React from "react";
import TruncatedText from "../TruncatedText";

import './style.scss'

const CardItem = ({ title, content, dateInfo, type, idx }) => {

  return (
    <div className='card'>
      <img src={'https://uis.ac.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-14-at-11.07.17-1024x768.jpeg'} alt="imgCard" />
      <h2>{title}</h2>
      <span><i className="ri-calendar-2-line" /> {dateInfo}</span>
      <TruncatedText text={content} maxLength={50} />
      <div className="d-flex justify-content-center pb-2" >
        <a href={`/${type}/${idx}/detail`} className="btn" >ReadMore</a>
      </div>
    </div>
  );
};

export default CardItem;