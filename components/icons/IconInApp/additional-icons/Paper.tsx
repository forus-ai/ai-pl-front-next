import { Icon, IconProps } from '@chakra-ui/react';

const PaperIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 58 58" fill="none" {...props}>
      <path
        d="M42.0501 47.125H15.9499C15.5654 47.125 15.1966 46.9579 14.9247 46.6605C14.6527 46.3631 14.5 45.9597 14.5 45.5391V10.6484C14.5 10.2278 14.6527 9.82445 14.9247 9.52703C15.1966 9.22961 15.5654 9.06251 15.9499 9.0625H34.4375L43.5 19.611V45.5391C43.5 45.9597 43.3473 46.3631 43.0753 46.6605C42.8034 46.9579 42.4346 47.125 42.0501 47.125Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M34.4375 9.0625V19.9375H43.5" fill="currentColor" />
      <path d="M34.4375 9.0625V19.9375H43.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.75 33.1429H36.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.75 26.2381H36.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.75 39.875H36.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default PaperIcon;
