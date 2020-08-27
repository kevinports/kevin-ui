import './Icon.css';
import React from 'react';

const Icon:React.SFC<HTMLElement> = ({children, className, ...rest}) => {
  return (
    <svg
      className={`Icon${className ? ' ' + className : ''}`}
      viewBox="0 0 16 16"
      {...rest}>
      { children }
    </svg>
  )
}

export const Close = ({...props}) => (
  <Icon stroke="currentColor" fill="none" {...props}>
    <>
      <line x1="3.35355" y1="3.50359" x2="12.6393" y2="12.7893" />
      <line x1="3.36073" y1="12.7893" x2="12.6464" y2="3.50358" />
    </>
  </Icon>
);

export const ChevronDown = ({...props}) => (
  <Icon stroke="currentColor" fill="none" {...props}>
    <path d="M12 5.99999L8 10L3.99999 5.99999"/>
  </Icon>
);

export const Checkmark = ({...props}) => (
  <Icon stroke="currentColor" fill="none" {...props}>
    <path d="M14.3269 3.56923L6.5 12L2.5 8.5"/>
  </Icon>
);

export const CaretRight = ({...props}) => (
  <Icon stroke="none" fill="currentColor" {...props}>
    <path d="M10.8764 7.18911C11.4295 7.58825 11.4295 8.41175 10.8764 8.81088L7.58521 11.1861C6.92384 11.6634 6 11.1908 6 10.3752L6 5.62478C6 4.80917 6.92384 4.3366 7.58521 4.8139L10.8764 7.18911Z"/>
  </Icon>
);
