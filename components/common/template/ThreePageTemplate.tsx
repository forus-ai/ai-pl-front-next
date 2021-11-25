import { Flex, FlexProps } from '@chakra-ui/layout';
import { SystemProps } from '@chakra-ui/react';

interface ThreePageTemplateProps extends FlexProps {
  leftSideContent: JSX.Element;
  centerSideContent: JSX.Element;
  rightSideContent: JSX.Element;
  basisDirection?: SystemProps['flexDirection'];
  leftSideContentBasisProps?: FlexProps;
  centerSideContentBasisProps?: FlexProps;
  rightSideContentBasisProps?: FlexProps;
}

const ThreePageTemplate = ({
  leftSideContent,
  rightSideContent,
  centerSideContent,
  centerSideContentBasisProps,
  leftSideContentBasisProps,
  rightSideContentBasisProps,
  basisDirection = { sm: 'column', md: 'row' },
  height = '100%',

  ...basisProps
}: ThreePageTemplateProps) => {
  return (
    <Basis {...basisProps} direction={basisDirection} height={height}>
      <LeftSideFlex {...leftSideContentBasisProps} direction="column" backgroundColor="custom.secondary">
        {leftSideContent}
      </LeftSideFlex>
      <Flex
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        overflowY="auto"
        w="100%"
        direction={{ sm: 'column-reverse', md: 'column', lg: 'row' }}
      >
        <CenterSideFlex {...centerSideContentBasisProps} direction="column">
          {centerSideContent}
        </CenterSideFlex>
        <RightSideFlex {...rightSideContentBasisProps} direction="column">
          {rightSideContent}
        </RightSideFlex>
      </Flex>
    </Basis>
  );
};
export default ThreePageTemplate;

const Basis = Flex;
const LeftSideFlex = Flex;
const CenterSideFlex = Flex;
const RightSideFlex = Flex;
