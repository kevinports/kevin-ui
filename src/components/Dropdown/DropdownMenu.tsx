import './DropdownMenu.css';
import React from 'react';

interface props {
  position?: 'left' | 'right',
  display?: boolean
}

export const DropdownMenu:React.SFC<props> = ({
  children,
  position = 'right',
  block = false
}) => {
  const hostStyle = {
    '--left': (position === 'left') ? 0 : 'initial',
    '--right': (position === 'right') ? 0 : 'initial',
    '--width': (block) ? '100%' : 'max-content'
  } as React.CSSProperties;

  return (
    <div style={hostStyle} className={`DropdownMenu`}>
      { children }
    </div>
  );
}