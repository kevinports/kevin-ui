import './DropdownButton.css';
import React from 'react';
import { ChevronDown } from '../Icon';

interface props {
  useCaret?: boolean
}

export const DropdownButton:React.SFC<props> = ({
  useCaret = true,
  children
}) => {
  return (
    <summary className={`DropdownButton`} role="button">
      { children }
      { useCaret && <ChevronDown /> }
    </summary>
  );
}