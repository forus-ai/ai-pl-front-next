import React from 'react';

import { Box, BoxProps, Text, VStack } from '@chakra-ui/layout';
import LinkButton from 'components/common/LinkButton';

interface SignUpProps extends BoxProps {}

const SignUpConfirm = ({ ...basisProps }: SignUpProps) => {
  return (
    <Box //
      w="100%"
      {...basisProps}
    >
      <Text
        mt={{ sm: '50px', md: '240px', lg: '320px' }}
        mb="10px"
        textAlign={{ sm: 'left', md: 'center', lg: 'left' }}
        as="h1"
        textStyle="lg"
        fontWeight="bold"
      >
        회원가입이 완료되었습니다.
      </Text>
      <Text textAlign={{ sm: 'left', md: 'center', lg: 'left' }} mb="60px" textStyle="md" color="custom.gray.4">
        피클의 서비스를 통해 나만의 양식장을 설계해보세요!
      </Text>
      <VStack w={{ sm: '100%', md: '440px', lg: '100%' }} spacing={{ sm: 0, lg: '10px' }} position={{ sm: 'fixed', lg: 'relative' }} right="0" bottom="0">
        <LinkButton //
          href="#"
          w="100%"
          py="20px"
          bg="custom.white"
          color="custom.primary"
          borderWidth="1px"
          borderColor="custom.primary"
        >
          메인화면 이동
        </LinkButton>
        <LinkButton //
          href="#"
          py="20px"
          w="100%"
          bg="custom.primary"
          color="custom.white"
        >
          무료서비스 이용하기
        </LinkButton>
      </VStack>
    </Box>
  );
};

export default SignUpConfirm;
