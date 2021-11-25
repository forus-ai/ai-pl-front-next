import { Icon, IconProps } from '@chakra-ui/react';

const DashBoardIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 54 54" fill="none" {...props}>
      <path d="M21.9375 21.9375V43.875" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.75 21.9375H47.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M45.5625 10.125H8.4375C7.50552 10.125 6.75 10.8805 6.75 11.8125V42.1875C6.75 43.1195 7.50552 43.875 8.4375 43.875H45.5625C46.4945 43.875 47.25 43.1195 47.25 42.1875V11.8125C47.25 10.8805 46.4945 10.125 45.5625 10.125Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="6.75" y="21.9375" width="15.1875" height="21.9375" fill="currentColor" />
    </Icon>
  );
};

export default DashBoardIcon;
