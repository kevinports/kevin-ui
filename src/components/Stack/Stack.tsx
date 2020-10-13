import './Stack.css';
import React from 'react';
import { BaseScale } from '../../tokens/declarations';

interface props {
  /**
   * Sets the direction that your stack flows.
   */
  axis?: 'x' | 'y';
  /**
   * Align children parallel to the axis.
   */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /**
   * Distributes children along to the axis.
   */
  distribute?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * Spacing between the children. Use a css value as a string, or pass in an index from the spacing scale as a number.
   */
  gap?: string | BaseScale;
  /**
   * Width of the Stack element. Use a css value as a string.
   */
  width?: string;
  /**
   * Height of the Stack element. Use a css value as a string.
   */
  height?: string;
  className?: string;
}

export const Stack:React.SFC<props> = ({
  children,
  className,
  axis = 'y',
  align = 'start',
  distribute = 'start',
  gap = '0px',
  width = 'auto',
  height = 'auto'
}) => {
  const hostStyle = {
    '--flow': axis === 'y' ? 'row' : 'column',
    '--gap': typeof gap === 'number' ? `var(--space-${gap})` : gap,
    '--align': align,
    '--distribute': distribute,
    '--width': width,
    '--height': height,
  } as React.CSSProperties;

  return (
    <div
      className={`Stack Stack--${axis}${className ? ' ' + className : ''}`}
      style={hostStyle}>
      { children }
    </div>
  );
}