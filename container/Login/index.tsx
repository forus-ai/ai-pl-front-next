import React from 'react';
import { Divider, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

import IconInApp from 'components/icons/IconInApp';
import Text from 'components/common/Text';
import SnsLoginBtn from './_fragments/SnsLoginBtn';

import { IMAGES } from 'constants/images';
import AsideContentsTemplate from 'components/common/template/AsideContentsTemplate';
import { useRouter } from 'next/dist/client/router';
import useIsLogged from 'utils/hooks/useIsLogged';
import { CONFIG } from 'constants/config';
import { ROUTE } from 'constants/route';
import { useRootContext } from 'context/root';

interface LoginProps {}

const Login = ({}: LoginProps) => {
  const router = useRouter();
  const isLogged = useIsLogged();
  const {
    handler: { openToast },
  } = useRootContext();

  const kakaoLoginHandler = () => {
    router.push({
      pathname: 'https://kauth.kakao.com/oauth/authorize',
      query: {
        response_type: 'code',
        client_id: CONFIG.API_KEYS.KAKAO,
        redirect_uri: CONFIG.REDIRECT.SOCIAL_LOGIN,
        state: 'kakao',
      },
    });
  };

  const naverLoginHandler = () => {
    router.push({
      pathname: 'https://nid.naver.com/oauth2.0/authorize',
      query: {
        response_type: 'code',
        client_id: CONFIG.API_KEYS.NAVER,
        redirect_uri: CONFIG.REDIRECT.SOCIAL_LOGIN,
        state: 'naver',
      },
    });
  };
  // For: Prevent login for logged user
  React.useEffect(() => {
    if (isLogged) {
      openToast({ status: 'warning', description: '로그인 된 유저입니다.' });
      router.push(ROUTE.MAIN);
    }
  }, [isLogged, openToast, router]);
  return (
    <AsideContentsTemplate
      subContent={
        <>
          <Text
            color="custom.white"
            textStyle="xl"
            fontWeight="bold"
            position="relative"
            zIndex="tooltip"
            mb="20px"
          >
            '양식이 모두에게 쉬워지도록'
          </Text>
          <Text
            textAlign="center"
            color="custom.white"
            textStyle="md"
            position="relative"
            zIndex="tooltip"
          >
            실제 시공될 양식장의 가격과 모델링을 미리 확인하고, <br />
            전문 설비 업체의 믿음직한 시공을 통해 양식장을 설계해보세요.
          </Text>
          <Image
            position="absolute"
            top="0"
            left="0"
            objectFit="cover"
            minW="0px"
            w="100%"
            h="100%"
            src={IMAGES.LOGIN.BG}
          />
        </>
      }
      mainContent={
        <>
          <Flex direction="column" w="100%" align="center" mt="160px">
            <IconInApp
              name="logo"
              width="120px"
              height="53px"
              color="custom.primary"
            />
            <Text textStyle="md" mt="20px" color="custom.gray.4">
              소셜 계정으로 간편 로그인/회원가입
            </Text>
          </Flex>
          <Divider
            display={{ sm: 'none', md: 'inline' }}
            mt={{ md: '40px', lg: '60px' }}
          />
          <SnsLoginBtn //
            onClick={kakaoLoginHandler}
            name="kakao"
            minH="60px"
            mt={{ sm: '265px', md: '50px', lg: '60px' }}
          />
          <SnsLoginBtn //
            onClick={naverLoginHandler}
            name="naver"
            minH="60px"
            mt="20px"
          />
          <Text mt="20px" mb="30px" align="center" textDecoration="underline">
            개인정보처리방침
          </Text>
        </>
      }
    />
  );
};

export default Login;
