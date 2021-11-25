import { Icon, IconProps } from '@chakra-ui/react';

const CallingWithSpeechBubbleIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 31 31" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.9312 5.12178C23.1105 2.30013 19.3494 0.75 15.3444 0.75C7.09737 0.75 0.379196 7.43626 0.372018 15.6441C0.372018 18.2728 1.06106 20.8302 2.36737 23.0947L0.25 30.8167L8.18836 28.7451C10.3775 29.9309 12.8394 30.5596 15.3444 30.5596H15.3515C23.5985 30.5596 30.3167 23.8733 30.3239 15.6583C30.3167 11.6795 28.7592 7.9363 25.9312 5.12178ZM15.3444 28.0379C13.105 28.0379 10.9158 27.4379 9.0066 26.3092L8.55441 26.0378L3.84595 27.2664L5.10202 22.6946L4.80774 22.2232C3.55885 20.2516 2.90569 17.9728 2.90569 15.6369C2.90569 8.82208 8.48982 3.26449 15.3515 3.26449C18.6747 3.26449 21.797 4.55745 24.1512 6.89335C26.4983 9.2364 27.7902 12.3438 27.7902 15.6512C27.783 22.4875 22.1989 28.0379 15.3444 28.0379ZM22.1702 18.7657C21.797 18.58 19.9595 17.6799 19.615 17.5514C19.2705 17.4299 19.0193 17.3656 18.7752 17.7371C18.524 18.1085 17.8063 18.9515 17.5909 19.1944C17.3756 19.4444 17.1531 19.4729 16.7799 19.2872C16.4066 19.1015 15.2008 18.7086 13.7725 17.4371C12.66 16.4513 11.9135 15.2297 11.691 14.8583C11.4757 14.4868 11.6695 14.2868 11.8561 14.1011C12.0212 13.9368 12.2293 13.6653 12.4159 13.451C12.6025 13.2367 12.6671 13.0796 12.7892 12.8296C12.9112 12.5795 12.8538 12.3652 12.7605 12.1795C12.6671 11.9938 11.9207 10.1579 11.6049 9.41499C11.3034 8.68636 10.9948 8.78637 10.7651 8.77922C10.5498 8.76493 10.2986 8.76493 10.0473 8.76493C9.79613 8.76493 9.39419 8.8578 9.04966 9.22926C8.70514 9.60072 7.74335 10.5008 7.74335 12.3367C7.74335 14.1725 9.08555 15.9369 9.27217 16.187C9.45878 16.437 11.9063 20.1944 15.6602 21.8088C16.5502 22.1946 17.2464 22.4232 17.7919 22.5946C18.6891 22.8804 19.5002 22.8375 20.1461 22.7446C20.8639 22.6375 22.3568 21.8446 22.6726 20.9731C22.9813 20.1016 22.9813 19.3586 22.888 19.2015C22.7947 19.0443 22.5434 18.9515 22.1702 18.7657Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default CallingWithSpeechBubbleIcon;