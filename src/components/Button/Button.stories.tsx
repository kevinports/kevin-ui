import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Overview = (args) => <Button>Label</Button>;
