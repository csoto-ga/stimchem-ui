import { forwardRef } from 'react';

type SwapProps = {
  label?: string;
  error?: string;
};

const Swap = forwardRef<HTMLInputElement, SwapProps>(({ label, error, ...restProps }, ref) => {
  return (
    <div className="flex w-full component-preview p-1 pb-3 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <label className="swap input input-sm input-bordered">
          <input type="checkbox" ref={ref} {...restProps} />
          <div className="swap-on">YES</div>
          <div className="swap-off">NO</div>
        </label>
      </div>
    </div>
  );
});

export default Swap;
