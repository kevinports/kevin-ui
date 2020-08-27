import './Details.css';
import React, { useState, useEffect, useRef } from 'react';

interface props {
  render: Function | React.ReactNode;
  onToggle: Function;
  animate?: boolean;
  overlay?: boolean;
}

function getRenderer(children) {
  return typeof children === 'function' ? children : () => children
}

export const Details:React.SFC<props> = ({
  children,
  render = getRenderer(children),
  overlay = false,
  animate = false,
  onToggle
}) => {
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