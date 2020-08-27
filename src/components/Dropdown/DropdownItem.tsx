import './DropdownItem.css';
import React from 'react';
import { Checkmark } from '../Icon';

interface props {
  selected: boolean;
  onClick: Function;
}

export const DropdownItem:React.SFC<props> = ({
  children,
  selected,
  onClick
}) => {
  const handleClick = (e) => {
    onClick && onClick(e);
  }

  return (
    <div
      className={`DropdownItem${(selected) ? ' DropdownItem--selected' : ''}`}
      onClick={handleClick}>
      <span>
        { children }
      </span>
      { selected && <Checkmark /> }
    </div>
  );
}