import { useFormContext } from 'react-hook-form';
import { CellProps, Row } from './types';

const TextCell = <T extends Row>({ row, column }: CellProps<T>) => {
  const { getValues } = useFormContext();

  return (
    <span key={row.index} className="font-sans">
      {getValues(`rows.${row.index}.${column.id}`)}
    </span>
  );
};

export default TextCell;
