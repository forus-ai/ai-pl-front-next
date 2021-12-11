import React from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';

import { LAYOUT } from 'constants/layout';

import Head from 'next/head';

interface LayoutProps extends FlexProps {
  header?: JSX.Element;
  children?: JSX.Element | JSX.Element[] | string;
  title?: string;
}

const Layout = ({
  header,
  children,
  title = 'FICL',
  ...basisProps
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {header}
      <Flex
        direction="column"
        minH="100vh"
        w="100%"
        pt={`${LAYOUT.HEADER_HEIGHT}px`}
        {...basisProps}
      >
        {children}
      </Flex>
    </>
  );
};

export default React.memo(Layout);
