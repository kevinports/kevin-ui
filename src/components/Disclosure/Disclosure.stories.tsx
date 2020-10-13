import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Disclosure } from '../index'

export default {
  title: 'Disclosure',
  component: Disclosure,
  parameters: {
    docs: {
      description: {
        component: 'A good ol\' twisty with a caret built using the `Details` component'
      }
    },
  }
} as Meta;


export const Basic = (args) => (
  <Disclosure label="Learn more about this">
    Here's some more about it.
  </Disclosure>
);