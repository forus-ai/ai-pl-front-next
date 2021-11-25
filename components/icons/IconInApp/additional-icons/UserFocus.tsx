import { Icon, IconProps } from '@chakra-ui/react';

const UserFocusIcon = ({ width = '24px', height = '24px', ...props }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 58 58" fill="none" {...props}>
      <path
        d="M40.7812 9.0625H47.125C47.6057 9.0625 48.0667 9.25346 48.4066 9.59337C48.7465 9.93328 48.9375 10.3943 48.9375 10.875V17.2187"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.7812 48.9373H47.125C47.6057 48.9373 48.0667 48.7464 48.4066 48.4064C48.7465 48.0665 48.9375 47.6055 48.9375 47.1248V40.781"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2188 48.9373H10.875C10.3943 48.9373 9.93328 48.7464 9.59337 48.4064C9.25346 48.0665 9.0625 47.6055 9.0625 47.1248V40.781"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2188 9.0625H10.875C10.3943 9.0625 9.93328 9.25346 9.59337 9.59337C9.25346 9.93328 9.0625 10.3943 9.0625 10.875V17.2187"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 32.625C33.0041 32.625 36.25 29.3791 36.25 25.375C36.25 21.3709 33.0041 18.125 29 18.125C24.9959 18.125 21.75 21.3709 21.75 25.375C21.75 29.3791 24.9959 32.625 29 32.625Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9727 39.8749C18.1279 37.6867 19.8583 35.8552 21.9774 34.5777C24.0965 33.3001 26.5241 32.625 28.9985 32.625C31.4729 32.625 33.9004 33.3001 36.0195 34.5777C38.1387 35.8552 39.869 37.6868 41.0243 39.875"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default UserFocusIcon;
