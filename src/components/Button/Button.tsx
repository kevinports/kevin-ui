import './Button.css';
import React from 'react';

interface props {
  as: 'button', 'a', 'summary'
}

export const Button:React.SFC<props & React.AnchorHTMLAttributes> = ({
  as = 'button',
  children,
  ...rest
}) => {
  const Tag = `${as}`;
  return (
    <Tag className={`Button`} role="button" {...rest}>
      { children }
    </Tag>
  );
}