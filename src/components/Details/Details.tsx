import './Details.css';
import React, { useState, useEffect, useRef, ReactElement } from 'react';

interface props {
  /**
   * For the parent to handle the Details toggling.
   */
  onToggle?: Function;
  /**
   * Animate the entry of the Details contents.
   */
  animate?: boolean;
  /**
   * Present the Details contents as an overlay. Clicking anywhre outside the contents will hide them.
   */
  overlay?: boolean;
  children: any;
  className?: string;
}

function getRenderer(children) {
  return typeof children === 'function' ? children : () => children
}

export const Details:React.SFC<props> = ({
  children,
  overlay = false,
  animate = false,
  onToggle
}) => {
  const render = getRenderer(children);
  const element = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = (e) => {
    onToggle && onToggle(e);
    setOpen(e.target.open);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest('details') !== element.current) {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (open && overlay) {
      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [open, overlay]);

  return (
    <details
      ref={element}
      open={open}
      aria-expanded={open}
      className={`Details${ animate ? ' is-animated' : '' }`}
      onToggle={handleToggle}>
      { render(open) }
    </details>
  );
}