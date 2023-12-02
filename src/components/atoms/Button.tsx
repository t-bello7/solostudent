import { FC } from 'react';
import type { ButtonInt } from '../../utils';

const Button: FC<ButtonInt> = ({
  variant,
  isLoading = false,
  disabled = false,
  Icon,
  text,
  onClick,
  styleType,
  className,
}) => {
  switch (variant) {
    case 'icon':
      return (
        <button
          type="button"
          disabled={disabled || isLoading}
          className={`border p-2 ${
            styleType === 'primary'
              ? 'border-primaryColor'
              : 'bg-primaryColor text-white'
          } ${className}`}
          onClick={onClick}
        >
          {isLoading ? (
            <svg className="... mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24">
              {' '}
            </svg>
          ) : (
            Icon
          )}
        </button>
      );
    case 'iconButton':
      return (
        <button
          type="button"
          disabled={disabled || isLoading}
          className={`flex items-center gap-4 border p-2 ${
            styleType === 'primary' ? 'border-primaryColor' : 'bg-PrimaryColor'
          } ${className}`}
          onClick={onClick}
        >
          {isLoading ? (
            <svg
              className="... mr-3 h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
            />
          ) : (
            Icon
          )}
          <span>
            {' '}
            {text}
          </span>
        </button>
      );
    default:
      return (
        <button
          type="button"
          disabled={disabled}
          className={`w-fit rounded-xl bg-primaryColor py-4 text-white ${className}`}
          onClick={onClick}
        >
          {' '}
          {text}
          {' '}
        </button>
      );
  }
};

export default Button;
