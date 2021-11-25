import { Icon, IconProps } from '@chakra-ui/react';

const PaperClipIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M10 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15 6H17.4C17.5591 6 17.7117 6.05955 17.8243 6.16555C17.9368 6.27155 18 6.41531 18 6.56522V18.4348C18 18.5847 17.9368 18.7285 17.8243 18.8345C17.7117 18.9405 17.5591 19 17.4 19H6.6C6.44087 19 6.28826 18.9405 6.17574 18.8345C6.06321 18.7285 6 18.5847 6 18.4348V6.56522C6 6.41531 6.06321 6.27155 6.17574 6.16555C6.28826 6.05955 6.44087 6 6.6 6L9 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7V6.5C9 5.83696 9.31607 5.20107 9.87868 4.73223C10.4413 4.26339 11.2044 4 12 4C12.7956 4 13.5587 4.26339 14.1213 4.73223C14.6839 5.20107 15 5.83696 15 6.5V7H9Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default PaperClipIcon;
