import React from 'react';

import { Box, Flex, HStack } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';

import FormHelper from 'components/common/FormHelper';
import LinkButton from 'components/common/LinkButton';
import Text from 'components/common/Text';

import { ROUTE } from 'constants/route';
import { useRootContext } from 'context/root';
import useIsLogged from 'utils/hooks/useIsLogged';

import { useRouter } from 'next/dist/client/router';

interface LoginProps {}

const Login = ({}: LoginProps) => {
  const router = useRouter();
  const isLogged = useIsLogged();
  const {
    handler: { openToast },
  } = useRootContext();

  // For: Prevent login for logged user
  React.useEffect(() => {
    if (isLogged) {
      openToast({ status: 'warning', description: '로그인 된 유저입니다.' });
      router.push(ROUTE.MAIN);
    }
  }, [isLogged, openToast, router]);
  return (
    <Box w="100%" display="flex" justifyContent="center">
      <Flex //
        w="335px"
        direction="column"
        align="center"
        mt="76px"
      >
        <Text textStyle="xl" w="100%" mb="50px" fontWeight="bold">
          로그인
        </Text>
        <FormHelper label="아이디(이메일)" mb="30px">
          <Input placeholder="아이디를 입력해주세요." />
        </FormHelper>
        <FormHelper label="비밀번호" mb="73px">
          <Input placeholder="아이디를 입력해주세요." />
        </FormHelper>
        <Button mb="40px">로그인</Button>
        <HStack w="100%" justify="space-between">
          <LinkButton w="fit-content" href="#" variant="link">
            비밀번호 찾기
          </LinkButton>
          <LinkButton w="fit-content" href="#" variant="link">
            아이디 찾기
          </LinkButton>
          <LinkButton w="fit-content" href="#" variant="link">
            비밀번호 재설정
          </LinkButton>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Login;
