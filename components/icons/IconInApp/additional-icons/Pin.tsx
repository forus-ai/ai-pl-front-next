import { Icon, IconProps } from '@chakra-ui/react';

const PinIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19 17C19 14.962 17.812 13.164 16 12.08V5H16.5C16.8978 5 17.2794 4.84196 17.5607 4.56066C17.842 4.27936 18 3.89782 18 3.5C18 3.10218 17.842 2.72064 17.5607 2.43934C17.2794 2.15804 16.8978 2 16.5 2H7.5C7.10218 2 6.72064 2.15804 6.43934 2.43934C6.15804 2.72064 6 3.10218 6 3.5C6 3.89782 6.15804 4.27936 6.43934 4.56066C6.72064 4.84196 7.10218 5 7.5 5H8V12.08C6.188 13.164 5 14.962 5 17H11V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V17H19Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default PinIcon;
