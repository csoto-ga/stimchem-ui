import { Button } from 'react-daisyui';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../schema';

type SubmitButtonsProps = {
  reset: () => void;
};

const SubmitButtons = ({ reset }: SubmitButtonsProps) => {
  const {
    formState: { isValid },
  } = useFormContext<FormInput>();
  return (
    <div className="flex justify-end mt-4">
      <Button color="primary" className="mr-2" size="sm" type="submit" disabled={!isValid}>
        Submit
      </Button>
      <Button size="sm" color="neutral" type="reset" onClick={() => reset()}>
        Cancel
      </Button>
    </div>
  );
};

export default SubmitButtons;
