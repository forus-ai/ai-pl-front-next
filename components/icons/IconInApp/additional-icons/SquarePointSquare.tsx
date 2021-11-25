import { Icon, IconProps } from '@chakra-ui/react';

const NestedSquareIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18.3333 5H15.6667C15.2985 5 15 5.29848 15 5.66667V8.33333C15 8.70152 15.2985 9 15.6667 9H18.3333C18.7015 9 19 8.70152 19 8.33333V5.66667C19 5.29848 18.7015 5 18.3333 5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33333 5H5.66667C5.29848 5 5 5.29848 5 5.66667V8.33333C5 8.70152 5.29848 9 5.66667 9H8.33333C8.70152 9 9 8.70152 9 8.33333V5.66667C9 5.29848 8.70152 5 8.33333 5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 15H15.6667C15.2985 15 15 15.2985 15 15.6667V18.3333C15 18.7015 15.2985 19 15.6667 19H18.3333C18.7015 19 19 18.7015 19 18.3333V15.6667C19 15.2985 18.7015 15 18.3333 15Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33333 15H5.66667C5.29848 15 5 15.2985 5 15.6667V18.3333C5 18.7015 5.29848 19 5.66667 19H8.33333C8.70152 19 9 18.7015 9 18.3333V15.6667C9 15.2985 8.70152 15 8.33333 15Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 15V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 17H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9V15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default NestedSquareIcon;
