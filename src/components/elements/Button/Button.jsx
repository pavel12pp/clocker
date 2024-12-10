import React from 'react';
import buttonStyles from './Button.module.scss';

const Button = (props) => {
  return (
    <div className={buttonStyles.button}>
      <span>{props.buttonTitle}</span>
    </div>
  );
};

export default Button