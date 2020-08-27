import React from 'react';
import { Details } from '../Details';

interface props {
}

export const Dropdown:React.SFC<props> = ({
  children
}) => {
  return (
    <Details animate overlay>
      { children }
    </Details>
  );
}