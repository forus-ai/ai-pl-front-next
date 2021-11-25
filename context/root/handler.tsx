import { useRouter } from 'next/dist/client/router';
import { ROUTE_DRAWER, ROUTE_MODAL } from 'constants/route';
import { RootAction } from './reducer';
import { RootState } from './state';
import { useToast, UseToastOptions } from '@chakra-ui/toast';

type RootHandlerArgs = {
  state: RootState;
  dispatch: React.Dispatch<RootAction>;
};

export const useRootHandler = ({}: RootHandlerArgs) => {
  const router = useRouter();
  const toast = useToast({
    isClosable: true,
    position: 'top-right',
  });

  const openToast = ({
    status,
    description,
  }: //
  Required<Pick<UseToastOptions, 'status' | 'description'>>) => {
    const titleSwitch: Record<typeof status, string> = {
      success: '성공',
      error: '에러',
      info: '팁',
      warning: '경고',
    };
    toast({
      //
      status,
      description,
      title: titleSwitch[status],
    });
  };

  const openDrawer = ({
    currentQuery,
    name,
  }: {
    currentQuery?: Obj;
    name: keyof typeof ROUTE_DRAWER;
  }) => {
    const getDrawerRoute = ROUTE_DRAWER[name];
    const route = getDrawerRoute(currentQuery);
    router.push(route);
  };

  const closeDrawer = () => {
    router.back();
  };

  const openModal = ({
    currentQuery,
    name,
  }: {
    currentQuery?: Obj;
    name: keyof typeof ROUTE_MODAL;
  }) => {
    const getModalRoute = ROUTE_MODAL[name];
    const route = getModalRoute(currentQuery);
    router.push(route);
  };

  const closeModal = () => {
    router.back();
  };

  return { openDrawer, closeDrawer, openModal, closeModal, openToast };
};
