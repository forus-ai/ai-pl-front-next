import { Icon, IconProps } from '@chakra-ui/react';

const RotationIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M19.25 8.75L21.5 6.5L19.25 4.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.5 12.5C3.5 10.9087 4.13214 9.38258 5.25736 8.25736C6.38258 7.13214 7.9087 6.5 9.5 6.5H21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.75 16.25L3.5 18.5L5.75 20.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21.5 12.5C21.5 14.0913 20.8679 15.6174 19.7426 16.7426C18.6174 17.8679 17.0913 18.5 15.5 18.5H3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default RotationIcon;
