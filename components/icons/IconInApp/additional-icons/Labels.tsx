import { Icon, IconProps } from '@chakra-ui/react';

const LabelsIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5.04673 15.5498L7.06708 4.53103C7.09785 4.36319 7.1967 4.21398 7.34188 4.11622C7.48706 4.01846 7.66667 3.98017 7.8412 4.00977L12.4478 4.79089C12.6223 4.82049 12.7775 4.91555 12.8791 5.05516C12.9808 5.19477 13.0206 5.3675 12.9898 5.53534L10.9592 16.6103C10.8224 17.356 10.387 18.0204 9.74651 18.4607C9.10597 18.9011 8.31139 19.0822 7.53347 18.9653C5.86766 18.7143 4.75393 17.1466 5.04673 15.5498Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L16.8154 10.0333C16.9612 9.98323 17.122 9.98985 17.2625 10.0517C17.4031 10.1135 17.5118 10.2255 17.5649 10.363L18.9647 13.9914C18.991 14.0595 19.0028 14.1317 18.9994 14.2041C18.9961 14.2765 18.9777 14.3475 18.9452 14.4132C18.9128 14.4788 18.8669 14.5378 18.8103 14.5867C18.7537 14.6357 18.6874 14.6736 18.6153 14.6984L9.5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 15V18.2519C18 18.4503 17.9431 18.6406 17.8417 18.7809C17.7403 18.9212 17.6028 19 17.4595 19H7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17Z" fill="currentColor" />
    </Icon>
  );
};

export default LabelsIcon;
