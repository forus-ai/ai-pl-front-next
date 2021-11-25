import { Icon, IconProps } from '@chakra-ui/react';

const ArrowDownUnderLine = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 25" fill="none" {...props}>
      <path d="M12 3.5V17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.25 11L12 17.75L18.75 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75 20.75H20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default ArrowDownUnderLine;
