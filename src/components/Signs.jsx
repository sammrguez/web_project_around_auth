import React from 'react';
import { Link } from 'react-router-dom';

function Signs({ header, id, children, buttonText, linkSpan, linkSpanText }) {
  return (
    <form className='sign'>
      <h3 className='sign__title'>{header}</h3>
      <div className='sign__input-container'>{children}</div>
      <button className='sign__submit-button' type='submit'>
        {buttonText}
      </button>
      <Link to={linkSpan} className='sign__link-span'>
        {linkSpanText}
      </Link>
      {/* <input
        type='text'
        className='sign__input'
        placeholder={placeHolder1}
        id={id}
        name='place-name'
        minLength='4'
        maxLength='30'
        required
      />
      <input
        type='text'
        className='sign__input'
        placeholder={placeHolder2}
        id={id}
        name='place-name'
        minLength='4'
        maxLength='30'
        required
      /> */}
    </form>
  );
}

export default Signs;
