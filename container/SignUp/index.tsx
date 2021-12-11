import React from 'react';

import { Box, Flex } from '@chakra-ui/layout';

import Text from 'components/common/Text';

import SignUpForm from './_fragments/SignUpForm';

interface SignUpProps {}

const SignUp = ({}: SignUpProps) => {
  return (
    <Box h="100%" display="flex" justifyContent="center">
      <Flex direction="column" w="335px">
        <Text textStyle="lg" mt="45px" mb="60px" fontWeight="bold">
          회원가입
        </Text>
        <SignUpForm />
      </Flex>
    </Box>
  );
};

export default SignUp;
