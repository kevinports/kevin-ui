import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import {
  Stack
} from './index';

import { Button } from '../Button'

export default {
  title: 'Stack',
  component: Stack,
  parameters: {
    docs: {
      description: {
        component: 'Creates a flexible and distributed layout along an axis.'
      }
    },
  }
} as Meta;


export const BasicVertical = (args) => (
  <Stack gap={4} align="stretch">
    <Button>Top</Button>
    <Button>Middle</Button>
    <Button>Bottom</Button>
  </Stack>
);

export const Nested = (args) => (
  <Stack axis="y" align="center" distribute="space-between" width="100%" height="420px">
    <Stack axis="x" align="baseline" distribute="space-between" width="100%">
      <h1>Hello</h1>
      <p>walls...</p>
    </Stack>
    <p>How'd things go for you today?</p>
  </Stack>
);

export const BasicCentered = (args) => (
  <Stack gap={4} align="center" distribute="center" width="100vw" height="100vh">
    <p>Dab in the middle</p>
    <Button>Smack</Button>
  </Stack>
);