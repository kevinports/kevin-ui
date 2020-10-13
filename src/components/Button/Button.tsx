import './Button.css';
import React, { ReactNode } from 'react';

export interface ButtonProps {
  as?: 'button' | 'a' | 'summary';
  children: ReactNode;
  href?: string;
  onClick?: Function;
}

export const Button:React.SFC<ButtonProps> = ({
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