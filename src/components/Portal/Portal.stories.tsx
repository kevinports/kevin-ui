import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Portal } from './index';
import { Button } from '../Button';
import { Stack } from '../Stack';

export default {
  title: 'Portal',
  component: Portal,
  parameters: {
    docs: {
      description: {
        component: 'Injects an element adjacent to the app root in the DOM. Useful for modals, dialogs, toasts, etc.'
      }
    },
  }
} as Meta;

export const Basic = (args) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsPortalOpen(true)}>Open portal!</Button>

      <Portal
        isOpen={isPortalOpen}
        openDelay={1000}
        closeDelay={1000}>
        {({ isOpen, willOpen, willClose }) => (
          <div
            className='p-8'
            style={{
              'position':'fixed',
              'bottom':'16px',
              'right':'16px',
              'borderRadius':'12px',
              'background':'#000',
              'color':'#fff'
            }}>
              <Stack gap={2} align="center">
                { willOpen && <p>The portal will open...</p> }
                { isOpen &&
                  <>
                      <p>You have opened a portal!</p>
                      <Button onClick={() => setIsPortalOpen(false)}>Close portal</Button>
                  </>
                }
                { willClose && <p>The portal will close...</p> }
              </Stack>
          </div>
        )}
      </Portal>

    </>
  )
}
