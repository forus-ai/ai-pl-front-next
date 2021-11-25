import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';

import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/popover';
import IconInApp, { IconInAppProps } from 'components/icons/IconInApp';
import Text from './Text';

interface SideMenuProps {
  sideMenu?: Array<{ name: string; onClick?: () => void }>;
  size?: IconInAppProps['width'];
}
const SideMenuButton = ({ sideMenu, size = '24px' }: SideMenuProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Popover placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Box as="button" w="fit-content" h="fit-content" onClick={onOpen}>
          <IconInApp name="more" width={size} height={size} />
        </Box>
      </PopoverTrigger>
      <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }} p="0">
        <PopoverBody w="fit-content" p="0">
          {sideMenu?.map((menu, idx) => {
            return (
              <Text
                key={idx}
                p="10px"
                textAlign="center"
                onClick={() => {
                  if (menu.onClick) menu.onClick();
                  onClose();
                }}
                _hover={{ bg: 'custom.gray.1' }}
              >
                {menu.name}
              </Text>
            );
          })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default SideMenuButton;
