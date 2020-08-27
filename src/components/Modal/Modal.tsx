import './Modal.css';
import React, { useEffect } from 'react';
import { Portal } from '../Portal';
import { Close } from '../Icon';

interface props {
  isOpen: boolean;
  onDismiss: Function;
}

export const Modal:React.SFC<props> = ({
  children,
  isOpen = false,
  onDismiss
}) => {

  const handleEscKey = (e) => {
    if (e.key !== 'Escape') return;
    onDismiss();
  }

  useEffect(() => {
    window.addEventListener('keyup', handleEscKey);

    return () => {
      window.removeEventListener('keyup', handleEscKey);
    }
  }, []);

  return (
    <Portal
      isOpen={isOpen}
      openDelay={200}
      closeDelay={200}>
      {({ isOpen, willOpen, willClose }) => (
        <div className={`Modal${isOpen ? ' is-open' : ''}${willOpen ? ' will-open' : ''}${willClose ? ' will-close' : ''}`}>
          <div className="Modal-contents">
            <Close className="Modal-dismiss" onClick={onDismiss}/>
            { children }
          </div>
        </div>
      )}
    </Portal>
  );
};