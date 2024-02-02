import { Select } from 'react-daisyui';
import { useFormContext } from 'react-hook-form';
import { CellProps, DropDownCellMeta, Row } from './types';

const DropDownCell = <T extends Row>({ row, column }: CellProps<T>) => {
  const meta = column.columnDef.meta as DropDownCellMeta;
  const { register } = useFormContext();
  return (
    <Select
      size="sm"
      key={row.index}
      {...register(`rows.${row.index}.${column.id}`)}
      defaultValue={''}
    >
      <Select.Option key={'-1'} value="" disabled>
        Pick one
      </Select.Option>
      {meta.options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropDownCell;
