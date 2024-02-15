import { useState } from 'react';

export const useHandleModal = (initialValue) => {
  const [modal, setModal] = useState(initialValue || false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  return { modal, toggleModal };
};
