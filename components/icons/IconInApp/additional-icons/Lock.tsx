import { Icon, IconProps } from '@chakra-ui/react';

const LockIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 60 60" fill="none" {...props}>
      <path
        d="M30 5C23.1075 5 17.5 10.6075 17.5 17.5V25H15C12.2425 25 10 27.2425 10 30V50C10 52.7575 12.2425 55 15 55H45C47.7575 55 50 52.7575 50 50V30C50 27.2425 47.7575 25 45 25H42.5V17.5C42.5 10.6075 36.8925 5 30 5ZM45 30L45.005 50H15V30H45ZM22.5 25V17.5C22.5 13.365 25.865 10 30 10C34.135 10 37.5 13.365 37.5 17.5V25H22.5Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default LockIcon;
