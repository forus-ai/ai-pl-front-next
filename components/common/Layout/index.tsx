import React from 'react';
import Head from 'next/head';
import { Flex, FlexProps } from '@chakra-ui/react';

import { LAYOUT } from 'constants/layout';

interface LayoutProps {
  header?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  title?: string;
  childrenContainerProps?: Omit<FlexProps, 'direction' | 'flexDirection' | 'width' | 'height' | 'w' | 'h'>;
}

const Layout = (props: LayoutProps) => {
  const {
    header,
    children,
    title = 'FICL',
    childrenContainerProps = {
      pt: {
        sm: `${LAYOUT.HEADER_HEIGHT.MOBILE}px`, //
        lg: `${LAYOUT.HEADER_HEIGHT.PC}px`,
      },
    },
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {header}
      <Flex direction="column" minH="100vh" w="100%" {...childrenContainerProps}>
        {children}
      </Flex>
    </>
  );
};

export default React.memo(Layout);
