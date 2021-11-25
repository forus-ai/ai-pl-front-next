import { Flex, FlexProps } from '@chakra-ui/layout';
import { LAYOUT } from 'constants/layout';

interface ConsultingTemplateProps extends FlexProps {
  leftSideContent: JSX.Element;
  rightSideContent: JSX.Element;
  leftSideContentBasisProps?: FlexProps;
  rightSideContentBasisProps?: FlexProps;
}

const ConsultingTemplate = ({
  leftSideContent,
  rightSideContent,
  leftSideContentBasisProps,
  rightSideContentBasisProps,
  ...basisProps
}: ConsultingTemplateProps) => {
  return (
    <>
      <Basis
        direction={{ sm: 'column', md: 'row' }}
        minH="100%"
        {...basisProps}
      >
        <LeftSideFlex
          direction="column"
          w={{ sm: '100%', md: 'fit-content' }}
          p={{ sm: '20px 16px', md: '40px', lg: '60px' }}
          minH={{ md: `calc(100vh - ${LAYOUT.HEADER_HEIGHT.PC}px)` }}
          backgroundColor="custom.secondary"
          {...leftSideContentBasisProps}
        >
          {leftSideContent}
        </LeftSideFlex>
        <RightSideFlex
          direction="column"
          flexGrow={1}
          {...rightSideContentBasisProps}
        >
          {rightSideContent}
        </RightSideFlex>
      </Basis>
    </>
  );
};
export default ConsultingTemplate;

const Basis = Flex;
const LeftSideFlex = Flex;
const RightSideFlex = Flex;
