import { Icon, IconProps } from '@chakra-ui/react';

const PlusInCircleIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <path d="M13.75 20H26.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 13.75V26.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default PlusInCircleIcon;
