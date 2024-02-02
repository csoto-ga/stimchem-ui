import { FormProvider, useForm } from 'react-hook-form';
import { AdditionRow } from './types';
import EditableTable, { DropDownCellMeta } from '@components/tables/EditableTable';
import createColumns from './columns';

const newRow: AdditionRow = {
  id: 0,
  physical_state: '',
  order_of_addition: '',
  additive_type: '',
  additive: '',
  lot_number: '',
  concentration: '',
  vol_mass: '',
};

const defaultData: AdditionRow[] = [
  {
    id: 1,
    physical_state: 'Liquid',
    order_of_addition: '1',
    additive_type: '1',
    additive: '1',
    lot_number: '12345',
    concentration: '109',
    vol_mass: '10.9',
  },
  {
    id: 2,
    physical_state: 'Liquid2',
    order_of_addition: '2',
    additive_type: '2',
    additive: '2',
    lot_number: '2222',
    concentration: '22',
    vol_mass: '22.9',
  },
];

const RecipeTable = () => {
  const additiveTypeOp: DropDownCellMeta = {
    options: [
      {
        label: 'Solvent',
        value: '1',
      },
      {
        label: 'Another',
        value: '2',
      },
    ],
  };
  const additiveOp: DropDownCellMeta = {
    options: [
      {
        label: 'Water',
        value: '1',
      },
      {
        label: 'Another',
        value: '2',
      },
    ],
  };

  const methods = useForm({
    // defaultValues: {
    //   rows: data,
    // },
  });
  const columns = createColumns({ additiveTypeOp, additiveOp });

  return (
    <FormProvider {...methods}>
      <EditableTable data={defaultData} columns={columns} rowDefaultValues={newRow} />
    </FormProvider>
  );
};

export default RecipeTable;
