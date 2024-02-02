import { createColumnHelper } from '@tanstack/react-table';
import { AdditionRow } from './types';
import {
  EditCell,
  TextCell,
  DropDownCell,
  TextBoxCell,
  DropDownCellMeta,
} from '@components/tables/EditableTable';

type createColumnsProps = {
  additiveTypeOp: DropDownCellMeta;
  additiveOp: DropDownCellMeta;
};

const createColumns = ({ additiveTypeOp, additiveOp }: createColumnsProps) => {
  const columnHelper = createColumnHelper<AdditionRow>();
  return [
    columnHelper.accessor('physical_state', {
      header: 'Physical State',
      cell: TextCell,
    }),
    columnHelper.accessor('order_of_addition', {
      header: 'Order of Addition',
      cell: TextCell,
    }),
    columnHelper.accessor('additive_type', {
      header: 'Additive Type',
      cell: DropDownCell,
      meta: additiveTypeOp,
    }),
    columnHelper.accessor('additive', {
      header: 'Additive',
      cell: DropDownCell,
      meta: additiveOp,
    }),
    columnHelper.accessor('lot_number', {
      header: 'Lot Number',
      cell: TextBoxCell,
    }),
    columnHelper.accessor('concentration', {
      header: 'Concentration (gpt, ppt)',
      cell: TextBoxCell,
    }),
    columnHelper.accessor('vol_mass', {
      header: 'Vol/Mass (mL, g)',
      cell: TextCell,
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: EditCell,
    }),
  ];
};

export default createColumns;
