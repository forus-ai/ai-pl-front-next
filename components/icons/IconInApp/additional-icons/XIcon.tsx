import { Icon, IconProps } from '@chakra-ui/react';

const XIcon = ({ width = '63px', height = '29px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 17 17" fill="none" {...props}>
      <path d="M1.47656 1.47607L15.4766 15.4761" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <path d="M15.4766 1.47607L1.47656 15.4761" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    </Icon>
  );
};

export default XIcon;
