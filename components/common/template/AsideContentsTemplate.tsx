import React from 'react';
import { Box, BoxProps } from '@chakra-ui/layout';
import { LAYOUT } from 'constants/layout';

interface AsideContentsTemplateProps extends BoxProps {
  subContent: JSX.Element;
  mainContent: JSX.Element;
  subContentBasisProps?: BoxProps;
  mainContentBasisProps?: BoxProps;
}
const AsideContentsTemplate = ({
  //
  subContent,
  mainContent,
  subContentBasisProps,
  mainContentBasisProps,

  display = 'flex',
  w = '100%',
  h = `calc(100vh - ${LAYOUT.HEADER_HEIGHT.PC}px)`,
  bg = 'custom.white',
  ...basisProps
}: AsideContentsTemplateProps) => {
  const subBasisProps: BoxProps = {
    display: { sm: 'none', md: 'flex' },
    w: '100%',
    minH: '100%',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    ...subContentBasisProps,
  };

  const mainBasisProps: BoxProps = {
    display: 'flex',
    minW: { sm: '100%', md: '440px', lg: '640px' },
    maxW: { sm: '100%', md: '440px', lg: '640px' },
    flexDirection: 'column',
    px: { sm: '16px', md: '70px', lg: '60px' },
    ...mainContentBasisProps,
  };

  return (
    <Basis display={display} w={w} h={h} bg={bg} {...basisProps}>
      <LeftSideBox {...subBasisProps}>{subContent}</LeftSideBox>
      <Content {...mainBasisProps}>{mainContent}</Content>
    </Basis>
  );
};

export default AsideContentsTemplate;

const Basis = Box;
const LeftSideBox = Box;
const Content = Box;
