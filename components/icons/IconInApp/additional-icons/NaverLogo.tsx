import { Icon, IconProps } from '@chakra-ui/react';

const NaverLogoIcon = ({ width = '24px', height = '24px', color = '#1A1A1A', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 25" fill="none" color={color} {...props}>
      <path d="M14.7251 12.8052L8.56212 3.95117H3.45312V20.4952H8.80513V11.6412L14.9681 20.4952H20.0771V3.95317H14.7251V12.8052Z" fill="currentColor" />
    </Icon>
  );
};

export default NaverLogoIcon;
