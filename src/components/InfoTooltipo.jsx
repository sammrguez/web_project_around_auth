import React from 'react';
import errorMessageImage from '../images/error_message.svg';
import successMessageImage from '../images/success_message.svg';

function InfoTooltipo() {
  return (
    <div className='popup popup_type_infoTool'>
      <div className='overlay'></div>
      <img ref={successMessageImage} className='infoTool__image' />
      <p className='infoTool__text'>'¡Correcto! Ya estás registrado.'</p>
    </div>
  );
}

export default InfoTooltipo;
