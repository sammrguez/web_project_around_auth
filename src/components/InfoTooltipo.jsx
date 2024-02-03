import React from 'react';
import iconSuccesss from '../images/success_message.svg';
import iconError from '../images/error_message.svg';

function InfoTooltipo({ isSuccess, shoulBeInfoOpen }) {
  console.log(shoulBeInfoOpen);
  const icon = isSuccess ? iconSuccesss : iconError;
  const messagge = isSuccess
    ? '¡Correcto! Ya estás registrado.'
    : 'Uy, algo salió mal. Por favor, inténtalo de nuevo.';

  return (
    <div className={`popup ${shoulBeInfoOpen ? 'popup_opened' : ''}`}>
      <div className='overlay'></div>
      <button
        className='form__close-button form__close-button_type_info'
        type='button'
      ></button>
      <div className='infoTool'>
        <img src={icon} className='infoTool__image' />
        <p className='infoTool__text'>{messagge}</p>
      </div>

      <p className='infoTool__text'>{messagge}</p>
    </div>
  );
}

export default InfoTooltipo;
