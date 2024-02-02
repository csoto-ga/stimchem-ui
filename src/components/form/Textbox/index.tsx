import React from 'react';
import { Input } from 'react-daisyui';
import clsx from 'clsx';

type TextBoxProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  is_required?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  ({ label, placeholder, error, value, onChange, is_required, ...restProps }, ref) => {
    return (
      <div className="flex w-full component-preview p-1 pb-3 items-center justify-center gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              {label}
              {is_required && <span className="label-text text-red-400"> * </span>}
            </span>
            {error && <span className="label-text-alt text-red-400">{error}</span>}
          </label>

          <Input
            ref={ref}
            value={value}
            className={clsx({ 'border-1  border-red-400 focus:border-red-400': error })}
            size="sm"
            bordered={true}
            placeholder={placeholder}
            onChange={onChange}
            {...restProps}
          />
        </div>
      </div>
    );
  }
);

export default TextBox;
