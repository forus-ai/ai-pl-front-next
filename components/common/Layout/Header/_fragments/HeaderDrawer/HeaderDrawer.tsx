import React from 'react';
import { Drawer, DrawerContent, DrawerOverlay, DrawerProps } from '@chakra-ui/modal';

import DrawerMenu from './DrawerMenu';
import { HeaderMenu } from '../../Header.data';

interface HeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  menuData: HeaderMenu[];
}
const HeaderDrawer = ({
  menuData,
  placement = 'right', // Basis Default
  ...basisProps
}: HeaderDrawerProps) => {
  return (
    <Drawer placement={placement} {...basisProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerMenu menuData={menuData} buttonToggle={basisProps.onClose} />
      </DrawerContent>
    </Drawer>
  );
};

export default HeaderDrawer;
