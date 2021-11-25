import { Icon, IconProps } from '@chakra-ui/react';

const EditIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M8.68934 20.7501H4.5C4.30109 20.7501 4.11032 20.6711 3.96967 20.5305C3.82902 20.3898 3.75 20.199 3.75 20.0001V15.8108C3.75 15.7123 3.7694 15.6148 3.80709 15.5238C3.84478 15.4328 3.90003 15.3501 3.96967 15.2805L15.2197 4.03046C15.3603 3.88981 15.5511 3.81079 15.75 3.81079C15.9489 3.81079 16.1397 3.88981 16.2803 4.03046L20.4697 8.2198C20.6103 8.36045 20.6893 8.55122 20.6893 8.75013C20.6893 8.94904 20.6103 9.13981 20.4697 9.28046L9.21967 20.5305C9.15003 20.6001 9.06735 20.6553 8.97635 20.693C8.88536 20.7307 8.78783 20.7501 8.68934 20.7501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.75 6.5L18 11.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.95125 20.7022L3.79688 15.5479" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default EditIcon;
