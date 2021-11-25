import { Icon, IconProps } from '@chakra-ui/react';

const ArrowRightWithTailIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 19 18" fill="none" {...props}>
      <path d="M11.2251 16L18 9.22498L11.2251 2.44995" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.1445 9.22803L1.94653 9.22803" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Icon>
  );
};

export default ArrowRightWithTailIcon;
