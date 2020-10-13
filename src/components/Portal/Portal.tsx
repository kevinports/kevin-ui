import './Portal.css';
import React, { useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { usePrevious } from '../../hooks/usePrevious';

interface props {
  /**
   * Opening the Portal is controlled by the Portal's parent component
   */
  isOpen: boolean;
  /**
   * For the parent to handle the Portal closing
   */
  onClose?: Function;
  /**
   * Use this delay to animate the children using the `willOpen` prop passed to the children on render
   */
  openDelay?: number;
  /**
   * Use this delay to animate the children using the `willClose` prop passed to the children on render
   */
  closeDelay?: number;
  children: any;
}

export const Portal:React.SFC<props> = ({
  children,
  isOpen,
  openDelay = 0,
  closeDelay = 0
}) => {
  const [container] = useState(document.createElement('div'));
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [willChangeTo, setWillChangeTo] = useState(null);
  const prevIsOpen = usePrevious(isOpen);

  container.classList.add('Portal');
  let didChangeTimeout = null;

  const cancelQueue = () => {
    if (didChangeTimeout) {
      clearTimeout(didChangeTimeout);
    }
  }

  const open = () => {
    cancelQueue();
    setWillChangeTo('open');

    didChangeTimeout = setTimeout(()=> {
      setInternalIsOpen(true);
      setWillChangeTo(null);
    }, openDelay);
  }

  const close = () => {
    cancelQueue();
    setWillChangeTo('closed');
    setInternalIsOpen(false);

    didChangeTimeout = setTimeout(()=> {
      setWillChangeTo(null);
    }, closeDelay);
  }

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    }
  }, []);

  useEffect(() => {
    if (isOpen && !prevIsOpen) {
      open();
    }
    else if (!isOpen && prevIsOpen) {
      close();
    }
  }, [isOpen])

  if (!isOpen && !internalIsOpen && !willChangeTo) {
    return null;
  }

  return createPortal(
    children({
      isOpen: internalIsOpen,
      willOpen: willChangeTo === "open",
      willClose: willChangeTo === "closed"
    }),
    container);
}