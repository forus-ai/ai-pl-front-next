import { Icon, IconProps } from '@chakra-ui/react';

const HeartFillIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12.479 21.627C12.4031 21.6272 12.3293 21.6015 12.27 21.554C11.952 21.299 4.47901 15.272 3.36201 11.705C3.06125 10.8788 2.94445 9.99689 3.01976 9.12086C3.09507 8.24483 3.36066 7.39578 3.798 6.63301C4.14175 6.05166 4.61734 5.55928 5.1864 5.19554C5.75546 4.8318 6.40205 4.6069 7.07401 4.53901C8.10446 4.44152 9.14268 4.6104 10.0891 5.02943C11.0356 5.44846 11.8585 6.10358 12.479 6.93202C13.0994 6.10344 13.9223 5.4482 14.8688 5.02916C15.8152 4.61011 16.8535 4.44133 17.884 4.53901C18.556 4.6069 19.2025 4.8318 19.7716 5.19554C20.3407 5.55928 20.8163 6.05166 21.16 6.63301C21.5983 7.39865 21.8638 8.25089 21.9381 9.12996C22.0124 10.009 21.8936 10.8937 21.59 11.722C20.477 15.272 13.005 21.299 12.69 21.554C12.6302 21.6019 12.5556 21.6277 12.479 21.627Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </Icon>
  );
};

export default HeartFillIcon;
