import { useFormContext } from 'react-hook-form';
import { FormInput, isFieldRequired } from '../schema';

const useFormContextExtended = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormInput>();

  const extendRegister = (fieldName: keyof FormInput) => {
    const required = isFieldRequired(fieldName);
    return { is_required: required ? 'true' : '', ...register(fieldName) };
  };

  return {
    control,
    extendRegister,
    errors,
  };
};

export default useFormContextExtended;
