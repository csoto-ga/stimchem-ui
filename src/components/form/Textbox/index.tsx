import React from 'react';
import { Input } from 'react-daisyui';
import clsx from 'clsx';

type TextBoxProps = {
  label?: string;
  placeholder?: string;
  error?: string;
};
const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  ({ label, placeholder, error, ...restProps }, ref) => {
    return (
      <div className="flex w-full component-preview p-1 items-center justify-center gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{label}</span>
            {error && <span className="label-text-alt text-red-400">{error}</span>}
          </label>
          <Input
            ref={ref}
            className={clsx({ 'border-1  border-red-400 focus:border-red-400': error })}
            size="sm"
            bordered={true}
            placeholder={placeholder}
            {...restProps}
          />
        </div>
      </div>
    );
  }
);

export default TextBox;
