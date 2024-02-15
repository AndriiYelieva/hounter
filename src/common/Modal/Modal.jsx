import React from 'react';
import { ModalBackground, ModalContent } from './Modal.styled';

export const Modal = ({
  children,
  modalMode,
  closeModal,
}) => {
  return (
    <ModalBackground active={modalMode} onClick={closeModal}>
      <ModalContent
        onClick={event => event.stopPropagation()}
      >
        {children}
      </ModalContent>
    </ModalBackground>
  );
};
