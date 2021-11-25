import React from 'react';
import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/layout';

interface KeyValueTextProps extends FlexProps {
  keyText: string | JSX.Element;
  value: string | JSX.Element;
  keyTextProps?: TextProps;
  valueProps?: TextProps;
}
const KeyValueText = ({
  keyText,
  value,
  keyTextProps,
  valueProps,

  ...basisProps
}: KeyValueTextProps) => {
  return (
    <Flex minW="180px" w="fit-content" {...basisProps}>
      <Text //
        minW="100px"
        textStyle="md"
        whiteSpace="pre"
        color="custom.gray.4"
        {...keyTextProps}
      >
        {keyText}
      </Text>
      <Text //
        as="div"
        flexGrow={1}
        fontWeight="bold"
        textStyle="md"
        color="custom.gray.5"
        whiteSpace="pre"
        {...valueProps}
      >
        {value}
      </Text>
    </Flex>
  );
};

export default React.memo(KeyValueText);
