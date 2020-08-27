import './Stack.css';
import React from 'react';
import { BaseScale } from '../../tokens/declarations';

interface props {
  axis?: 'x' | 'y';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  distribute?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: string | BaseScale;
  className?: string;
}

export const Stack:React.SFC<props> = ({
  children,
  className,
  axis = 'y',
  align = 'start',
  distribute = 'start',
  gap = '0px'
}) => {
  const hostStyle = {
    '--flow': axis === 'y' ? 'row' : 'column',
    '--gap': typeof gap === 'number' ? `var(--space-${gap})` : gap,
    '--align': (align === 'start') ? 'normal' : align,
    '--distribute': distribute,
  } as React.CSSProperties;

  return (
    <div
      className={`Stack Stack--${axis}${className ? ' ' + className : ''}`}
      style={hostStyle}>
      { children }
    </div>
  );
}