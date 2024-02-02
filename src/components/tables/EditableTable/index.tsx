import { flexRender, getCoreRowModel, useReactTable, TableOptions } from '@tanstack/react-table';
import FooterCell from './components/footer-cell';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CustomTableMeta, Row } from './components/types';
export { default as EditCell } from './components/edit-cell';
export { default as TextCell } from './components/text-cell';
export { default as DropDownCell } from './components/drop-down-cell';
export { default as TextBoxCell } from './components/textbox-cell';
export type { DropDownCellMeta, Row } from './components/types';

type EditableTableProps<T extends Record<string, any> & Row> = Pick<
  TableOptions<T>,
  'columns' | 'data'
> & {
  rowDefaultValues: T;
};

const EditableTable = <T extends Record<string, any> & Row>({
  data,
  columns,
  rowDefaultValues,
}: EditableTableProps<T>) => {
  const [dataState, setDataState] = useState<T[]>(() => [...data]);
  const { setValue, getValues } = useFormContext();
  const newRow = rowDefaultValues;

  useEffect(() => {
    setValue('rows', [...data]);
  }, [data, setValue]);

  const updateValue = (newRow: T) => {
    setValue('rows', [...getValues('rows'), newRow]);
  };

  const removeValue = (rowIndex: number) => {
    setValue(
      'rows',
      getValues('rows').filter((_: any, index: number) => index !== rowIndex)
    );
  };

  const table = useReactTable<T>({
    data: dataState,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      addRow: () => {
        newRow.id = data.length + 1;
        const setFunc = (old: T[]) => [...old, newRow];
        setDataState(setFunc);
        updateValue(newRow);
        //console.log(getValues('rows'));
      },
      removeRow: (rowIndex: number) => {
        const setFilterFunc = (old: T[]) =>
          old.filter((_row: T, index: number) => index !== rowIndex);
        setDataState(setFilterFunc);
        removeValue(rowIndex);
      },
    } as CustomTableMeta<T>,
  });
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden p-2">
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="px-6 py-4 text-sm font-medium text-gray-900">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => {
                  return (
                    <tr key={row.id} className='border-b" bg-white'>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900"
                            key={cell.id}
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={table.getCenterLeafColumns().length} align="right">
                    <FooterCell table={table} />
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableTable;
