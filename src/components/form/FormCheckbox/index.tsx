import { forwardRef } from 'react';
import { Form, Checkbox } from 'react-daisyui';

type Props = {
  label?: string;
  error?: string;
};

const FormCheckbox = forwardRef<HTMLInputElement, Props>(({ label, error, ...restProps }, ref) => {
  return (
    <div className="flex w-full component-preview p-1 pb-3 items-center justify-center gap-2 font-sans">
      <div className="shadow bg-base-200 w-80 rounded-lg m-2 p-0.5">
        <Form.Label title={label}>
          <Checkbox ref={ref} size="sm" {...restProps} />
        </Form.Label>
      </div>
    </div>
  );
});

export default FormCheckbox;
