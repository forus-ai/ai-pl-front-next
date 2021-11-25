import { Icon, IconProps } from '@chakra-ui/react';

const KaKaoLogoIcon = ({ width = '24px', height = '24px', color = '#1A1A1A', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 25" fill="none" color={color} {...props}>
      <path
        d="M5.677 21.313C5.498 21.207 5.527 21.192 6.57 17.613C3.827 16.266 2 13.866 2 11.128C2 6.916 6.328 3.5 11.662 3.5H11.739C17.099 3.5 21.446 6.912 21.446 11.123C21.446 14.956 17.846 18.129 13.146 18.665C12.1006 18.7906 11.0434 18.7825 10 18.641C6.766 20.908 6.071 21.341 5.8 21.341C5.75719 21.3434 5.71457 21.3337 5.677 21.313Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default KaKaoLogoIcon;
