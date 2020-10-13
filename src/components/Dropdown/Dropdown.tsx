import React, { ReactNode } from 'react';
import { Details } from '../Details';

interface props {
  children: ReactNode;
}

export const Dropdown:React.SFC<props> = ({
  children
}) => {
  return (
    <Details className="Dropdown" animate overlay>
      { children }
    </Details>
  );
}