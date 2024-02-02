import { Option } from '@components/form/Dropdown/types';
export const dpConfig: {
  booleanOptions: Option[];
  typeOptions: Option[];
  appOptions: Option[];
  pslOptions: Option[];
} = {
  booleanOptions: [
    { key: '1', text: 'Yes', value: 'true' },
    { key: '2', text: 'No', value: 'false' },
  ],
  typeOptions: [
    { key: '1', text: 'Type 1', value: '1' },
    { key: '2', text: 'Type 2', value: '2' },
    { key: '3', text: 'Type 3', value: '3' },
    { key: '4', text: 'Type 4', value: '4' },
  ],
  appOptions: [
    { key: '1', text: 'App 1', value: '1' },
    { key: '2', text: 'App 2', value: '2' },
    { key: '3', text: 'App 3', value: '3' },
    { key: '4', text: 'App 4', value: '4' },
  ],
  pslOptions: [
    { key: '1', text: 'PSL 1', value: '1' },
    { key: '2', text: 'PSL 2', value: '2' },
    { key: '3', text: 'PSL 3', value: '3' },
    { key: '4', text: 'PSL 4', value: '4' },
  ],
};
