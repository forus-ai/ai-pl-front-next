import React from 'react';

import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import AsideContentsTemplate from 'components/common/template/AsideContentsTemplate';
import Text from 'components/common/Text';

import SignUpForm from './_fragments/SignUpForm';
import { IMAGES } from 'constants/images';
import SignUpConfirm from './_fragments/SignUpConfirm';

interface SignUpProps {}

const SignUp = ({}: SignUpProps) => {
  const isConfirmSignUp = false;
  const mainContentPaddingX = { sm: '16px', md: '70px', lg: '60px' };
  return (
    <AsideContentsTemplate
      subContent={
        <>
          <Text color="custom.white" textStyle="xl" fontWeight="bold" position="relative" zIndex="tooltip" mb="20px">
            '양식이 모두에게 쉬워지도록'
          </Text>
          <Text textAlign="center" color="custom.white" textStyle="md" position="relative" zIndex="tooltip">
            실제 시공될 양식장의 가격과 모델링을 미리 확인하고, <br />
            전문 설비 업체의 믿음직한 시공을 통해 양식장을 설계해보세요.
          </Text>
          <Image position="absolute" top="0" left="0" objectFit="cover" minW="0px" w="100%" h="100%" src={IMAGES.LOGIN.BG} />
        </>
      }
      mainContentBasisProps={{ px: 0 }}
      mainContent={
        isConfirmSignUp ? (
          <SignUpConfirm px={mainContentPaddingX} />
        ) : (
          <Box h="100%" overflowY="scroll">
            <Text textStyle="lg" mt="45px" mb="60px" fontWeight="bold" px={mainContentPaddingX}>
              회원님의 정보를 입력해 주세요.
            </Text>
            <SignUpForm px={mainContentPaddingX} />
          </Box>
        )
      }
    />
  );
};

export default SignUp;
