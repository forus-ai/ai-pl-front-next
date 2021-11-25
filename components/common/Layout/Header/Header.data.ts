import { ButtonProps } from '@chakra-ui/button';
import { IconProps } from '@chakra-ui/icon';
import { FlexProps, TextProps } from '@chakra-ui/layout';
import { ROUTE } from 'constants/route';
import { UrlObject } from 'url';
import { HeaderProps } from '.';

export const HEADER_MENUS: HeaderMenu[] = [
  {
    id: 0,
    name: '서비스 소개',
    item: [
      { id: 0, path: ROUTE.INTRODUCE('preparation'), name: '사전안내' },
      { id: 1, path: ROUTE.INTRODUCE('plan'), name: '시공/설계' },
    ],
  },
  {
    id: 1,
    name: '서비스 이용하기',
    item: [
      { id: 0, path: ROUTE.PREPARE.MAIN, name: '사전안내' },
      { id: 1, path: ROUTE.PLAN.MAIN, name: '시공/설계' },
    ],
  },
  { id: 2, name: '피클 모델하우스', path: ROUTE.PREPARE.MODEL_HOUSE },
  { id: 3, name: '완공현장', path: ROUTE.COMPLETION_PROJECTS },
  { id: 4, name: '자금/교육 정보', path: ROUTE.INFORMATION },
];

export const HEADER_VARIANTS: Record<
  HeaderProps['variant'],
  ColorSetByVariant
> = {
  transparent: {
    backgroundColor: 'transparent',
    textColor: { sm: 'custom.white', lg: 'custom.secondary' },
    logoColor: { sm: 'custom.white', lg: 'custom.secondary' },
    rightBtnColor: { sm: 'custom.white', lg: 'custom.secondary' },
  },
  light: {
    backgroundColor: 'custom.white',
    textColor: 'custom.secondary',
    logoColor: 'custom.primary',
    rightBtnColor: 'custom.primary',
  },
  dark: {
    backgroundColor: 'custom.secondary',
    textColor: 'custom.white',
    logoColor: 'custom.white',
    rightBtnColor: 'custom.white',
  },
};

export interface HeaderMenu {
  id: number;
  name: string;
  path?: Url;
  item?: MenuItemProps[];
}

type MenuItemProps = {
  id: number;
  path: Url;
  name: string;
};

type ColorSetByVariant = {
  backgroundColor: FlexProps['backgroundColor'];
  textColor: TextProps['color'];
  logoColor: IconProps['color'];
  rightBtnColor: ButtonProps['color'];
};

type Url = string | UrlObject;
