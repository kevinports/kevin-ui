import './Disclosure.css';
import React from 'react';
import { Details } from '../Details';
import { CaretRight } from '../Icon';

interface props {
  /**
   * Label for the summary
   */
  label: string;
}

export const Disclosure:React.SFC<props> = ({
  label,
  children
}) => {
  return (
    <Details>
      {(open) => (
        <>
          <summary className={`Disclosure-toggle${open ? ' is-open' : ''}`}>
            <CaretRight />
            {label}
          </summary>
          <div className="Disclosure-contents">
            {children}
          </div>
        </>
      )}
    </Details>
  );
}