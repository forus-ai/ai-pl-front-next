import React from 'react';
import LinkButton, { LinkButtonProps } from 'components/common/LinkButton';
import IconInApp from 'components/icons/IconInApp';

export interface DirectLinkBtnProps extends Omit<LinkButtonProps, 'children'> {
  text: string;
}
const DirectLinkBtn = ({
  text,

  variant = 'unstyled', // Basis Default
  size = 'sm',
  fontWeight = 'bold',
  ...basisProps
}: DirectLinkBtnProps) => {
  return (
    <LinkButton //
      variant={variant}
      size={size}
      fontWeight={fontWeight}
      {...basisProps}
    >
      {text}
      <IconInApp ml="5px" name="arrowRight" mb="3px" color={basisProps.color} />
    </LinkButton>
  );
};

export default DirectLinkBtn;
