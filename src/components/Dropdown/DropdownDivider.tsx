import './DropdownDivider.css';
import React from 'react';

interface props {}

export const DropdownDivider:React.SFC<props> = () => {
  return (
    <hr className="DropdownDivider" />
  );
}