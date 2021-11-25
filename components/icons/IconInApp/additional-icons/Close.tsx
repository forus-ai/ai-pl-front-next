import { Icon, IconProps } from '@chakra-ui/react';

const CloseIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4.47656 4.47607L18.4766 18.4761" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18.4766 4.47607L4.47656 18.4761" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Icon>
  );
};

export default CloseIcon;
