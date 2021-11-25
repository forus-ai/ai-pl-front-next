import { Icon, IconProps } from '@chakra-ui/react';

const SquarePointCircleIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M27.0011 22.1431V9.85905C27.6834 9.68418 28.3074 9.33186 28.8096 8.83784C29.3118 8.34383 29.6743 7.72572 29.8604 7.04629C30.0464 6.36685 30.0494 5.65029 29.8689 4.96935C29.6884 4.28841 29.331 3.66735 28.8329 3.16923C28.3348 2.67111 27.7137 2.31367 27.0328 2.13321C26.3518 1.95275 25.6353 1.95569 24.9558 2.14173C24.2764 2.32778 23.6583 2.6903 23.1643 3.19249C22.6702 3.69468 22.3179 4.31865 22.1431 5.00105H9.85905C9.68418 4.31865 9.33186 3.69468 8.83784 3.19249C8.34383 2.6903 7.72572 2.32778 7.04629 2.14173C6.36685 1.95569 5.65029 1.95275 4.96935 2.13321C4.28841 2.31367 3.66735 2.67111 3.16923 3.16923C2.67111 3.66735 2.31367 4.28841 2.13321 4.96935C1.95275 5.65029 1.95569 6.36685 2.14173 7.04629C2.32778 7.72572 2.6903 8.34383 3.19249 8.83784C3.69468 9.33186 4.31865 9.68418 5.00105 9.85905V22.1431C4.31865 22.3179 3.69468 22.6702 3.19249 23.1643C2.6903 23.6583 2.32778 24.2764 2.14173 24.9558C1.95569 25.6353 1.95275 26.3518 2.13321 27.0328C2.31367 27.7137 2.67111 28.3348 3.16923 28.8329C3.66735 29.331 4.28841 29.6884 4.96935 29.8689C5.65029 30.0494 6.36685 30.0464 7.04629 29.8604C7.72572 29.6743 8.34383 29.3118 8.83784 28.8096C9.33186 28.3074 9.68418 27.6834 9.85905 27.0011H22.1431C22.3179 27.6834 22.6702 28.3074 23.1643 28.8096C23.6583 29.3118 24.2764 29.6743 24.9558 29.8604C25.6353 30.0464 26.3518 30.0494 27.0328 29.8689C27.7137 29.6884 28.3348 29.331 28.8329 28.8329C29.331 28.3348 29.6884 27.7137 29.8689 27.0328C30.0494 26.3518 30.0464 25.6353 29.8604 24.9558C29.6743 24.2764 29.3118 23.6583 28.8096 23.1643C28.3074 22.6702 27.6834 22.3179 27.0011 22.1431ZM26.0011 4.00105C26.3966 4.00105 26.7833 4.11835 27.1122 4.33811C27.4411 4.55787 27.6974 4.87023 27.8488 5.23568C28.0002 5.60114 28.0398 6.00327 27.9626 6.39123C27.8855 6.77919 27.695 7.13556 27.4153 7.41526C27.1356 7.69497 26.7792 7.88545 26.3912 7.96262C26.0033 8.03979 25.6011 8.00019 25.2357 7.84881C24.8702 7.69743 24.5579 7.44109 24.3381 7.11219C24.1183 6.78329 24.0011 6.39661 24.0011 6.00105C24.0016 5.47078 24.2125 4.96238 24.5874 4.58742C24.9624 4.21246 25.4708 4.00158 26.0011 4.00105ZM4.00105 6.00105C4.00105 5.60549 4.11835 5.21881 4.33811 4.88991C4.55787 4.56101 4.87023 4.30467 5.23568 4.15329C5.60114 4.00192 6.00327 3.96231 6.39123 4.03948C6.77919 4.11665 7.13556 4.30713 7.41526 4.58684C7.69497 4.86654 7.88545 5.22291 7.96262 5.61087C8.03979 5.99883 8.00019 6.40097 7.84881 6.76642C7.69743 7.13187 7.44109 7.44423 7.11219 7.66399C6.78329 7.88375 6.39661 8.00105 6.00105 8.00105C5.47078 8.00052 4.96238 7.78964 4.58742 7.41468C4.21246 7.03972 4.00158 6.53132 4.00105 6.00105ZM6.00105 28.0011C5.60549 28.0011 5.21881 27.8838 4.88991 27.664C4.56101 27.4442 4.30467 27.1319 4.15329 26.7664C4.00192 26.401 3.96231 25.9988 4.03948 25.6109C4.11665 25.2229 4.30713 24.8665 4.58684 24.5868C4.86654 24.3071 5.22291 24.1167 5.61087 24.0395C5.99883 23.9623 6.40097 24.0019 6.76642 24.1533C7.13187 24.3047 7.44423 24.561 7.66399 24.8899C7.88375 25.2188 8.00105 25.6055 8.00105 26.0011C8.00052 26.5313 7.78964 27.0397 7.41468 27.4147C7.03972 27.7896 6.53132 28.0005 6.00105 28.0011ZM22.1431 25.0011H9.85905C9.67992 24.3135 9.32064 23.6862 8.81826 23.1838C8.31588 22.6815 7.68858 22.3222 7.00105 22.1431V9.85905C7.68853 9.67983 8.31578 9.32052 8.81815 8.81815C9.32052 8.31578 9.67983 7.68853 9.85905 7.00105H22.1431C22.3222 7.68858 22.6815 8.31588 23.1838 8.81826C23.6862 9.32064 24.3135 9.67992 25.0011 9.85905V22.1431C24.3135 22.3221 23.6861 22.6813 23.1837 23.1837C22.6813 23.6861 22.3221 24.3135 22.1431 25.0011ZM26.0011 28.0011C25.6055 28.0011 25.2188 27.8838 24.8899 27.664C24.561 27.4442 24.3047 27.1319 24.1533 26.7664C24.0019 26.401 23.9623 25.9988 24.0395 25.6109C24.1167 25.2229 24.3071 24.8665 24.5868 24.5868C24.8665 24.3071 25.2229 24.1167 25.6109 24.0395C25.9988 23.9623 26.401 24.0019 26.7664 24.1533C27.1319 24.3047 27.4442 24.561 27.664 24.8899C27.8838 25.2188 28.0011 25.6055 28.0011 26.0011C28.0003 26.5312 27.7893 27.0395 27.4144 27.4144C27.0395 27.7893 26.5312 28.0003 26.0011 28.0011Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default SquarePointCircleIcon;
