import {
  ChangeEventHandler,
  ComponentProps,
  FocusEventHandler,
  ReactElement,
  forwardRef,
} from 'react';
import { FormError, FormErrorType } from '.';

export type FieldProps = {
  name?: string;
  label?: string;
  value: string;
  defaultValue?: string;
  error?: FormErrorType;
  type?: ComponentProps<'input'>['type'];
  placeholder?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  (
    { name, value, error, type, placeholder, label, disabled, onChange, onFocus, onBlur },
    ref
  ): ReactElement => {
    return (
      <div>
        {label && <p>{label}</p>}
        <input
          ref={ref}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <FormError text={error} />
      </div>
    );
  }
);
