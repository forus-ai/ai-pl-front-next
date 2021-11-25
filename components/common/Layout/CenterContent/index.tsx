import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';

const CenterContent = ({ children, ...props }: ContainerProps) => {
  return (
    <Container {...props} maxW={{ sm: 'container.sm', md: 'container.lg', lg: 'container.xl' }}>
      {children}
    </Container>
  );
};

export default CenterContent;
