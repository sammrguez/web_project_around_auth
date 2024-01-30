import { text } from 'express';
import React from 'react';

function InfoTooltipo({ icon, text }) {
  return (
    <div className='popup popup_type_infoTool'>
      <div className='overlay'></div>
      <img ref={icon} className='infoTool__image' />
      <p className='infoTool__text'>{text}</p>
    </div>
  );
}

export default InfoTooltipo;
