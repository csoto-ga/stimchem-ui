import { useFormContext } from 'react-hook-form';
import { Input } from 'react-daisyui';
import { CellProps, Row } from './types';

const TextBoxCell = <T extends Row>({ row, column }: CellProps<T>) => {
  const { register } = useFormContext();
  return (
    <Input
      className="input input-sm input-bordered w-full"
      key={row.index}
      {...register(`rows.${row.index}.${column.id}`)}
    />
  );
};

export default TextBoxCell;
