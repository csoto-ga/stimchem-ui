import { TableMeta, Row as RTRow, Column } from '@tanstack/react-table';

export interface CellProps<T extends Row> {
  row: RTRow<T>;
  column: Column<T, string>;
}

export interface Row {
  id: number;
}

export interface CustomTableMeta<T extends Row> extends TableMeta<T> {
  removeRow?: (index: number) => void;
  addRow?: () => void;
}

export interface Option {
  value: string;
  label: string;
}

export interface DropDownCellMeta {
  options: Option[];
}
