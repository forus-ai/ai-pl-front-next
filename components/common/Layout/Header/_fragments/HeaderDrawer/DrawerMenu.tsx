import React from 'react';
import { Flex, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack, Button } from '@chakra-ui/react';

import { ROUTE } from 'constants/route';
import IconInApp from 'components/icons/IconInApp';
import { HeaderMenu } from '../../Header.data';
import LinkButton from 'components/common/LinkButton';
import useIsLogged from 'utils/hooks/useIsLogged';

interface DrawerProps {
  menuData: HeaderMenu[];
  buttonToggle: () => void;
}

const DrawerMenu = (props: DrawerProps) => {
  const { menuData, buttonToggle } = props;
  const isLogged = useIsLogged();

  return (
    <Flex px="20px" py="10px" align="flex-start" direction="column" h="100vh" w="100%" backgroundColor="custom.white">
      <Flex w="100%" justify="space-between" align="center">
        <LinkButton w="150px" py="10px" href={isLogged ? ROUTE.DASHBOARD : ROUTE.LOGIN} variant="outline" color="custom.secondary">
          {isLogged ? '마이페이지' : '로그인 / 회원가입'}
        </LinkButton>
        <IconInApp name="close" onClick={buttonToggle} style={{ cursor: 'pointer' }} width="20px" height="20px" />
      </Flex>
      <Box mt="150px" w="100%">
        <Accordion w="100%" allowToggle>
          {menuData.map((menu) => {
            return (
              <React.Fragment key={menu.id}>
                {menu.path ? (
                  <AccordionItem style={{ border: '0px' }}>
                    <AccordionButton //
                      w="100%"
                      px={0}
                      _hover={{ hover: 'none' }}
                      _focus={{ boxShadow: 'none' }}
                    >
                      <LinkButton //
                        variant="unstyled"
                        textAlign="left"
                        href={menu.path}
                      >
                        {menu.name}
                      </LinkButton>
                    </AccordionButton>
                  </AccordionItem>
                ) : (
                  <AccordionItem style={{ border: '0px' }}>
                    <AccordionButton //
                      display="flex"
                      justifyContent="space-between"
                      w="100%"
                      px={0}
                      _hover={{ hover: 'none' }}
                      _focus={{ boxShadow: 'none' }}
                    >
                      <Button //
                        as="p"
                        textAlign="left"
                        variant="unstyled"
                        color="black"
                        fontWeight="bold"
                      >
                        {menu.name}
                      </Button>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p="0">
                      <VStack>
                        {menu.item?.map((item) => {
                          return (
                            <LinkButton //
                              key={item.id}
                              variant="unstyled"
                              cursor="pointer"
                              py="10px"
                              px={0}
                              href={item.path}
                              fontWeight="normal"
                              color="custom.gray.4"
                            >
                              {item.name}
                            </LinkButton>
                          );
                        })}
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                )}
              </React.Fragment>
            );
          })}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default DrawerMenu;
