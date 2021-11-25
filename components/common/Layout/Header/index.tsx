import React from 'react';
import { Flex, Stack, Box, Button, useDisclosure, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import IconInApp from 'components/icons/IconInApp';
import LinkButton from 'components/common/LinkButton';
import HeaderDrawer from './_fragments/HeaderDrawer/HeaderDrawer';

import { LAYOUT } from 'constants/layout';
import { ROUTE } from 'constants/route';

import useIsLogged from 'utils/hooks/useIsLogged';
import { HEADER_MENUS, HEADER_VARIANTS } from './Header.data';

export interface HeaderProps {
  variant: 'transparent' | 'light' | 'dark';
}

const Header = ({ variant }: HeaderProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isLogged = useIsLogged();

  const { backgroundColor, textColor, logoColor, rightBtnColor } = HEADER_VARIANTS[variant];
  return (
    <Flex
      as="header"
      backgroundColor={backgroundColor}
      w="100%"
      h={{
        sm: `${LAYOUT.HEADER_HEIGHT.MOBILE}px`, //
        lg: `${LAYOUT.HEADER_HEIGHT.PC}px`,
      }}
      direction="column"
      justify="center"
      zIndex={9}
      position="fixed"
      transition="all 0.1s ease-in"
    >
      <Flex align="center" justify="space-between" py="16px" px={{ sm: '16px', md: '50px', lg: '60px' }} as="nav">
        <Stack spacing={4} isInline justifyContent="center" alignItems="center">
          <Box mr="60px" style={{ cursor: 'pointer' }}>
            <LinkButton href={ROUTE.MAIN} variant="unstyled">
              <IconInApp name="logo" color={logoColor} transition="all 0.1s ease-in" />
            </LinkButton>
          </Box>
          <Stack //
            isInline
            display={{ sm: 'none', lg: 'flex' }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {HEADER_MENUS.map((menu) => {
              return (
                <Flex key={menu.id}>
                  {menu.path ? (
                    <LinkButton //
                      variant="unstyled"
                      transition="all 0.1s ease-in"
                      color={textColor}
                      fontWeight="normal"
                      href={menu.path}
                    >
                      {menu.name}
                    </LinkButton>
                  ) : (
                    <Menu>
                      <MenuButton
                        as={Button}
                        color={textColor}
                        variant="unstyled"
                        transition="all 0.1s ease-in"
                        fontWeight="normal"
                        rightIcon={
                          <IconInApp //
                            name="arrowDown"
                            color={textColor}
                            mb="5px"
                          />
                        }
                      >
                        {menu.name}
                      </MenuButton>
                      <MenuList minW="fit-content" p="0">
                        {menu.item?.map((i) => (
                          <MenuItem //
                            key={i.id}
                            _focus={{ boxShadow: 'none' }}
                            mb="0"
                            p="0"
                            bg="transparent"
                          >
                            <LinkButton //
                              bg="transparent"
                              color="custom.secondary"
                              variant="unstyled"
                              href={i.path}
                              p="10px 16px"
                              fontWeight="normal"
                            >
                              {i.name}
                            </LinkButton>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  )}
                </Flex>
              );
            })}
          </Stack>
        </Stack>

        <LinkButton //
          href={isLogged ? ROUTE.DASHBOARD : ROUTE.LOGIN}
          display={{ sm: 'none', lg: 'flex' }}
          w="fit-content"
          px="20px"
          py="10px"
          variant="outline"
          color={rightBtnColor}
        >
          {isLogged ? '마이페이지' : '로그인 / 회원가입'}
        </LinkButton>
        <Box cursor="pointer" display={{ sm: 'inline', lg: 'none' }}>
          <IconInApp name="menu" onClick={onToggle} color={rightBtnColor} />
        </Box>
        <HeaderDrawer isOpen={isOpen} onClose={onClose} menuData={HEADER_MENUS} />
      </Flex>
    </Flex>
  );
};

export default React.memo(Header);
