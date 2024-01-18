import { forwardRef } from 'react';
import { Checkbox as RDCheckbox } from 'react-daisyui';

type CheckBoxProps = {
  label?: string;
  error?: string;
};

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, error, ...restProps }, ref) => {
    return (
      <div className="flex items-center w-full p-1 pb-5 gap-2 font-sans">
        <div className="form-control items-center">
          <label className="label">
            <span className="label-text">{label}</span>
          </label>

          <RDCheckbox ref={ref} size="md" {...restProps} />
        </div>
      </div>
    );
  }
);

export default CheckBox;
