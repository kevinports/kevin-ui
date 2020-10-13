import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Details} from './index';
import { Button} from '../Button';
import { Stack } from '../Stack';

export default {
  title: 'Details',
  component: Details,
  parameters: {
    docs: {
      description: {
        component: 'Wraps the `<details></details>` HTML element to show and hide content. You must provide your own `<summary></summary>`. Optionally use the React render prop pattern by passing children as function that exposes the `open` state.'
      }
    }
  }
} as Meta;

export const Basic = (args) => (
  <Stack align="stretch">
    <Details>
      {(open) => (
        <>
          <Button as='summary'>
            {`${open ? 'Hide' : 'Show'} details`}
          </Button>
          <div className="mt-2 p-4" style={{'background': '#f8f8f8'}}>
            Juicy details
          </div>
        </>
      )}
    </Details>
  </Stack>
);


export const Overlay = (args) => (
  <Stack align="start" gap={4}>
    <Details animate overlay>
      {(open) => (
        <>
          <Button as='summary'>
            {`${open ? 'Hide' : 'Show'} details`}
          </Button>
          <div
            className="p-8"
            style={{
              'background': '#f8f8f8',
              'borderRadius': '8px',
              'position':'absolute',
              'top':'0%',
              'width':'max-content'
              }}>
            The devil is in here. (Click away to hide)
          </div>
        </>
      )}
    </Details>
    <p>
      Some other content down under.
    </p>
  </Stack>
);