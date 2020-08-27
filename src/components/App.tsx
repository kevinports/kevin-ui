import React, { useState } from 'react';
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  Stack,
  Modal,
  Button,
  Details,
  Disclosure
} from './index';

export const ExampleDropdown = () => (
  <Dropdown>
    <DropdownButton>
      Options
    </DropdownButton>

    <DropdownMenu>
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
)

export const App:React.SFC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Stack className="p-4" gap={4}>

      <Stack axis="x" align="baseline" distribute="space-between">
        <h1>Hello</h1>
        <ExampleDropdown />
      </Stack>

      <div>
        <Disclosure text="Learn more about this">
          Here's some more about it.
        </Disclosure>
      </div>

      <div>
        <Stack className="mb-8" axis="x" gap={0}>
          <Button>ButtonButt</Button>
          <Button as="a" href="/foo">AnchorButt</Button>
          <Details>
            <Button as="summary">Summary Butt</Button>
            These are the details
          </Details>
        </Stack>

        <a href="#" onClick={() => setIsDialogOpen(true)}>Open dialog</a>
        <Modal
          isOpen={isDialogOpen}
          onDismiss={() => setIsDialogOpen(false)}>
          Hello from dialog
        </Modal>
      </div>

    </Stack>
  )
};