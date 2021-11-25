import { Badge as ChakraBadge, BadgeProps } from '@chakra-ui/react';
/**
 * @see Docs https://chakra-ui.com/docs/data-display/badge
 */

const Badge = ({
  display = 'flex',
  alignItems = 'center',
  justifyContent = 'center',
  borderRadius = '15px',
  w = 'fit-content',
  h = 'fit-content',
  p = '6px 15px 3px',
  fontWeight = 'bold',
  ...props
}: BadgeProps) => {
  return (
    <ChakraBadge
      w={w}
      h={h}
      p={p}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      {...props}
    />
  );
};

export default Badge;
