import React from 'react';
import Link from 'next/link';

import { Button } from '@chakra-ui/button';
import { HStack, Stack } from '@chakra-ui/layout';
import { ROUTE } from 'constants/route';

import IconInApp, { IconInAppProps } from 'components/icons/IconInApp';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { useTheme } from '@chakra-ui/system';

interface TestComponentPresenterProps {
  env: string;
  count: number | null;
}

const TestComponentPresenter = ({ env, count }: TestComponentPresenterProps) => {
  const isDev = env === 'development';
  const isProd = env === 'production';

  const iconNamesInApp: Array<IconInAppProps['name']> = [
    'logo',
    'close',
    'menu',
    'arrowUp',
    'arrowUpOnLine',
    'arrowUpInPaper',
    'arrowDown',
    'arrowDownOnLine',
    'arrowDownDashTail',
    'arrowRight',
    'arrowRightWithTail',
    'arrowLeft',
    'plusInPaper',
    'plusInCircle',
    'minusInCircle',
    'paper',
    'paperClip',
    'squareForward',
    'squarePointSquare',
    'squarePointCircle',
    'labels',
    'targeting',
    'puzzle',
    'userFocus',
    'dashboard',
    'lock',
    'tool',
    'handAndHouse',
    'compass',
    'rotation',
    'callingWithSpeechBubble',
    'edit',
    'pin',
    'houseOnLine',
    'graphMultiLine',
    'naverLogo',
    'kakaoLogo',
    'settingLine',
    'more',
  ];

  const theme = useTheme();

  console.log(theme.components.Tabs);

  return (
    <Stack align="center" px={4} mt={20}>
      <IconInApp name="logo" width="200px" height="80px" color="custom.primary" />
      {isDev && <h1> 개발환경입니다.</h1>}
      {isProd && <h1> 배포환경입니다.</h1>}
      <h2>props.count: {count || 0}</h2>

      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Link href={ROUTE.MAIN} passHref>
        <Button as="a" alignItems="center" display="flex">
          go to main
          <IconInApp name="arrowDown" ml="20px" />
        </Button>
      </Link>
      <HStack spacing={4} mt="40px" wrap="wrap" width="400px">
        {iconNamesInApp.map((name, idx) => (
          <Stack key={idx} align="center" p={5}>
            <IconInApp name={name} color="custom.primary" />
            <p>{name}</p>
          </Stack>
        ))}
      </HStack>
    </Stack>
  );
};

export default TestComponentPresenter;
