import './Disclosure.css';
import React from 'react';
import { Details } from '../Details';
import { CaretRight } from '../Icon';

interface props {
  text: string;
}

export const Disclosure:React.SFC<props> = ({
  text,
  children
}) => {
  return (
    <Details>
      {(open) => (
        <>
          <summary className={`Disclosure-toggle${open ? ' is-open' : ''}`}>
            <CaretRight />
            {text}
          </summary>
          <div className="Disclosure-contents">
            {children}
          </div>
        </>
      )}
    </Details>
  );
}