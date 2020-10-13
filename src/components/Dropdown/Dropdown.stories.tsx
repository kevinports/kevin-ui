import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownDivider
} from './index';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

export const withMenu = (args) => (
  <Dropdown>
    <DropdownButton>
      Open menu
    </DropdownButton>

    <DropdownMenu position="left">
      <DropdownItem selected>
        Apples
      </DropdownItem>
      <DropdownItem>
        Bananas
      </DropdownItem>
      <DropdownItem>
        Oranges
      </DropdownItem>

      <DropdownDivider/>

      <DropdownItem>
        Brocolli
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);


export const anyContents = (args) => (
  <Dropdown>
    <DropdownButton>
      Open sesame
    </DropdownButton>
    <DropdownMenu position="left">
      <div className="p-8">
        <p>Whatever stuff you want</p>
      </div>
    </DropdownMenu>
  </Dropdown>
);