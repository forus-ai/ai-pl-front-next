import { Icon, IconProps } from '@chakra-ui/react';

const PlusInPaperIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M18.7498 21.5H5.24902C5.05011 21.5 4.85935 21.421 4.71869 21.2803C4.57804 21.1397 4.49902 20.9489 4.49902 20.75V4.25C4.49902 4.05109 4.57804 3.86032 4.71869 3.71967C4.85935 3.57902 5.05011 3.5 5.24902 3.5H14.2498L19.4998 8.75V20.75C19.4998 20.8485 19.4804 20.946 19.4427 21.037C19.405 21.128 19.3497 21.2107 19.2801 21.2803C19.2104 21.35 19.1278 21.4052 19.0368 21.4429C18.9458 21.4806 18.8482 21.5 18.7498 21.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.25 3.5V8.75H19.5007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 14.75H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default PlusInPaperIcon;
