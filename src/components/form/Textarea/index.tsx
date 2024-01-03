import { forwardRef } from 'react';
import { Textarea as TextareaDUI } from 'react-daisyui';
import clsx from 'clsx';

type TextAreaProps = {
  label?: string;
  placeholder?: string;
  error?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, placeholder, error, ...restProps }, ref) => {
    return (
      <div className="flex w-full component-preview p-1 items-center justify-center gap-2 font-sans">
        <div className="form-control">
          <label className="label">
            <span className="label-text">{label}</span>
            {error && <span className="label-text-alt text-red-400">{error}</span>}
          </label>
          <TextareaDUI
            ref={ref}
            className={clsx('resize', { 'border-1  border-red-400 focus:border-red-400': error })}
            placeholder={placeholder}
            size="lg"
            {...restProps}
          />
        </div>
      </div>
    );
  }
);

export default TextArea;
