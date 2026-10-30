import React from 'react';
import { RuneIcon as BaseRuneIcon, type RuneIconProps as BaseRuneIconProps } from 'runeicons-react';
import { BrandLogo as BaseBrandLogo, type BrandLogoProps as BaseBrandLogoProps } from 'runeicons-react/brands';

export interface RuneIconProps extends BaseRuneIconProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export const RuneIcon: React.FC<RuneIconProps> = ({
  name,
  type = 'normal',
  size = 20,
  className = '',
  style = {},
  color,
  ...props
}) => {
  return (
    <span
      className={`rune-icon-wrapper inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
        color: color || 'inherit',
        ...style,
      }}
      {...props}
    >
      <BaseRuneIcon name={name} type={type} size={size} />
    </span>
  );
};

export interface BrandLogoProps extends BaseBrandLogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  name,
  size = 20,
  title,
  className = '',
  style = {},
  color,
  ...props
}) => {
  return (
    <span
      className={`rune-brand-wrapper inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
        color: color || 'inherit',
        ...style,
      }}
      {...props}
    >
      <BaseBrandLogo name={name} size={size} title={title} />
    </span>
  );
};

export default RuneIcon;

