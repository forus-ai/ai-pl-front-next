import { ModalProps, Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import Text from 'components/common/Text';
import React from 'react';

interface ModalComponentProps extends ModalProps {
  children: JSX.Element | JSX.Element[];
  bottomContents: JSX.Element | JSX.Element[];
  headerText: string;
}

const FiclModal = ({ isOpen, onClose, bottomContents, headerText, children, ...props }: ModalComponentProps) => {
  return (
    <ChakraModal {...props} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          maxH="calc(100vh - 20px)"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#08BAED',
              borderRadius: '10px',
            },
            '&-webkit-scrollbar-track': {
              backgroundColor: '#08BAED',
              borderRadius: '10px',
            },
          }}
        >
          <Text>{children}</Text>
        </ModalBody>
        {bottomContents}
      </ModalContent>
    </ChakraModal>
  );
};

export default FiclModal;
