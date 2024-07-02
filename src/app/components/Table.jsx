// import { Box, Spinner } from '@chakra-ui/react';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

export const TableChakra = ({ data, columns, isLoading }) => {
  const tables = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table className="table-wrapper">
      <thead className="thead">
        {tables.getHeaderGroups().map((headerGroup) => (
          <tr className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="th" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="tbody">
        {tables.getRowModel().rows.map((row) => (
          <tr className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="td" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
