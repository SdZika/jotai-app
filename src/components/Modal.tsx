import React from 'react'
import type { FC } from 'react';
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode

}

export const Modal: FC<ModalProps>= ({isOpen, onClose, children}) => {

  if (!isOpen) return null;




  return ReactDOM.createPortal(
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.body
  )
}
