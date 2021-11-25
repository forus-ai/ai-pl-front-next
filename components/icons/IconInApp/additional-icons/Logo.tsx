import { Icon, IconProps } from '@chakra-ui/react';

const LogoIcon = ({ width = '63px', height = '29px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 63 29" fill="none" {...props}>
      <path d="M25.4769 0.190186H18.0508V27.811H25.4769V0.190186Z" fill="currentColor" />
      <path d="M54.661 20.575V0H47.2348L47.2031 28.0011H63.0004V20.575H54.661Z" fill="currentColor" />
      <path
        d="M0 13.3555H7.4226C7.4226 11.8237 8.0311 10.3546 9.11423 9.27146C10.1974 8.18833 11.6664 7.57985 13.1982 7.57985V0.157227C9.69782 0.157227 6.34081 1.54777 3.86567 4.02291C1.39052 6.49806 0 9.85507 0 13.3555Z"
        fill="currentColor"
      />
      <path
        d="M0 27.8452H7.4226C7.4226 26.3134 8.0311 24.8443 9.11423 23.7612C10.1974 22.6781 11.6664 22.0696 13.1982 22.0696V14.647C9.69782 14.647 6.34081 16.0375 3.86567 18.5126C1.39052 20.9878 0 24.3448 0 27.8452Z"
        fill="currentColor"
      />
      <path
        d="M37.0421 13.9989C37.0434 12.4678 37.6526 10.9997 38.7358 9.91759C39.8191 8.83544 41.2877 8.2277 42.8189 8.22801V0.80542C41.0855 0.805112 39.3689 1.14628 37.7673 1.8094C36.1657 2.47252 34.7104 3.44461 33.4844 4.67019C32.2585 5.89577 31.286 7.35083 30.6225 8.95227C29.9589 10.5537 29.6173 12.2702 29.6172 14.0036C29.6173 15.737 29.9589 17.4533 30.6224 19.0546C31.2859 20.6559 32.2583 22.1108 33.4841 23.3362C34.7099 24.5617 36.1651 25.5337 37.7666 26.1968C39.368 26.8599 41.0844 27.201 42.8177 27.2007V19.7792C42.0589 19.7791 41.3076 19.6294 40.6066 19.3388C39.9056 19.0482 39.2688 18.6224 38.7325 18.0856C38.1961 17.5488 37.7708 16.9116 37.4807 16.2104C37.1907 15.5092 37.0417 14.7578 37.0421 13.9989Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default LogoIcon;