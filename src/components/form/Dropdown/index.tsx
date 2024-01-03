import React from 'react';
import { Select } from 'react-daisyui';
import clsx from 'clsx';

type Props = {
  label?: string;
  defaultValue?: string;
  defaultText?: string;
  options?: Option[];
  error?: string;
};

export interface Option {
  key: string;
  value: string;
  text: string;
}

const Dropdown = React.forwardRef<HTMLSelectElement, Props>(
  (
    { label, defaultValue = '', defaultText = 'Pick one', options = [], error, ...restProps },
    ref
  ) => {
    return (
      <div className="flex w-full component-preview p-1 items-center justify-center gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{label}</span>
            {error && <span className="label-text-alt text-red-400">{error}</span>}
          </label>
          <Select
            ref={ref}
            size="sm"
            defaultValue={defaultValue}
            //onChange={console.log}
            className={clsx({ 'border-1 border-red-400 focus:border-red-400': error })}
            {...restProps}
          >
            <Select.Option key="0" value={defaultValue} disabled>
              {defaultText}
            </Select.Option>
            {options.map((opt) => (
              <Select.Option key={opt.key} value={opt.value}>
                {opt.text}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
    );
  }
);

export default Dropdown;
