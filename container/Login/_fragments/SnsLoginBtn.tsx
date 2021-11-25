import React from 'react';
import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/layout';
import IconInApp, { IconInAppProps } from 'components/icons/IconInApp';

const VARIANT: Record<SnsLoginBtnProps['name'], { bg: FlexProps['bg']; sns: string; textColor: TextProps['color']; logo: IconInAppProps['name'] }> = {
  kakao: {
    bg: '#FFDE32',
    sns: '카카오',
    textColor: 'custom.black',
    logo: 'kakaoLogo',
  },
  naver: {
    bg: '#20CF5D',
    sns: '네이버',
    textColor: 'custom.white',
    logo: 'naverLogo',
  },
};

interface SnsLoginBtnProps extends FlexProps {
  name: 'kakao' | 'naver';
}
const SnsLoginBtn = ({
  name,

  h = '60px', // Basis Default
  align = 'center',
  justify = 'center',
  ...basisProps
}: SnsLoginBtnProps) => {
  const { bg, sns, textColor, logo } = VARIANT[name];

  return (
    <Flex as="button" bg={bg} h={h} align={align} justify={justify} borderRadius="5px" {...basisProps}>
      <IconInApp mr="13px" name={logo} color={textColor} />
      <Text textStyle="md" color={textColor}>
        {sns} 계정으로 로그인
        <Text as="strong" display={{ sm: 'inline', md: 'none', lg: 'inline' }} fontWeight="normal">
          /회원가입
        </Text>
      </Text>
    </Flex>
  );
};

export default SnsLoginBtn;
