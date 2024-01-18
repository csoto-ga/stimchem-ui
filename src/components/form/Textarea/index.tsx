import { forwardRef } from 'react';
import { Textarea as TextareaDUI } from 'react-daisyui';
import clsx from 'clsx';

type TextAreaProps = {
  label?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  is_required?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, placeholder, className, error, is_required, ...restProps }, ref) => {
    return (
      <div className="flex w-full component-preview p-1 pb-3 items-center justify-center gap-2 font-sans">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {label}
              {is_required && <span className="label-text text-red-400"> * </span>}
            </span>
            {error && <span className="label-text-alt text-red-400">{error}</span>}
          </label>
          <TextareaDUI
            ref={ref}
            className={clsx('resize-none', className, {
              'border-1 border-red-400 focus:border-red-400': error,
            })}
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
