import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button } from '../Button';
import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

export const Basic = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>
      <Modal
        isOpen={isModalOpen}
        onDismiss={() => setIsModalOpen(false)}>
        Hello from dialog
      </Modal>
    </>
  )
}
