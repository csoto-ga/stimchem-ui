import ReactDatepicker, { DateValueType } from 'react-tailwindcss-datepicker';
import clsx from 'clsx';

type Props = {
  label?: string;
  error?: string;
  value: DateValueType;
  onChange: (newValue: DateValueType) => void;
  is_required?: string;
};

const Datepicker = ({ label, error, value, onChange, is_required, ...rest }: Props) => {
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
        <ReactDatepicker
          containerClassName="relative"
          inputClassName={clsx('input input-sm input-bordered w-full max-w-xs', {
            'border-1 border-red-400 focus:border-red-400 input input-sm input-bordered w-full max-w-xs':
              error,
          })}
          toggleClassName="absolute bg-base-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
          primaryColor={'indigo'}
          popoverDirection="down"
          displayFormat={'DD/MM/YYYY'}
          minDate={new Date()}
          readOnly={true}
          useRange={false}
          asSingle={true}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Datepicker;
