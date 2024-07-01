import React from 'react';
import { Box } from '@chakra-ui/react';
import { TableHeader } from './tableheader';
import { Table } from './table';

export const TablePage = () => {
  return (
    <Box className="flex flex-col p-[24px] gap-[16px]">
      <TableHeader />
      <Table />
    </Box>
  );
};
