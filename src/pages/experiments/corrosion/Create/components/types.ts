import { Row } from '@components/tables/EditableTable';

export interface AdditionRow extends Row {
  physical_state: string;
  order_of_addition: string;
  additive_type: string;
  additive: string;
  lot_number: string;
  concentration: string;
  vol_mass: string;
}
