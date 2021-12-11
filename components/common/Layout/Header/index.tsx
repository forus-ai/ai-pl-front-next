import React from 'react';

import { ButtonProps, Flex, HStack } from '@chakra-ui/react';

import LinkButton from 'components/common/LinkButton';

import { LAYOUT } from 'constants/layout';
import { ROUTE } from 'constants/route';

import { useRouter } from 'next/router';

export interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const router = useRouter();
  const isLogin = router.pathname === ROUTE.LOGIN;
  const isSignUp = router.pathname === ROUTE.SIGN_UP;

  const selectedStyle: Omit<ButtonProps, 'as'> = {
    bg: 'custom.primary',
  };
  const unSelectedStyle: Omit<ButtonProps, 'as'> = {
    variant: 'outline',
    border: 'none',
    color: 'custom.gray.4',
  };

  const getBtnStyleByIsSelected = (isSelected: boolean) =>
    isSelected ? selectedStyle : unSelectedStyle;

  return (
    <Flex
      as="header"
      backgroundColor="transparent"
      w="100%"
      h={`${LAYOUT.HEADER_HEIGHT}px`}
      justify="flex-end"
      position="fixed"
      transition="all 0.1s ease-in"
      p="17px 20px"
    >
      <HStack as="nav" spacing="10px">
        <LinkButton //
          href={ROUTE.LOGIN}
          w="80px"
          {...getBtnStyleByIsSelected(isLogin)}
        >
          로그인
        </LinkButton>
        <LinkButton //
          href={ROUTE.SIGN_UP}
          w="80px"
          {...getBtnStyleByIsSelected(isSignUp)}
        >
          회원가입
        </LinkButton>
      </HStack>
    </Flex>
  );
};

export default React.memo(Header);
