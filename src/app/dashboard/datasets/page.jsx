'use client';

import { Box } from '@chakra-ui/react';
import { TableFilter } from '../component';
import { DatasetTable } from './DatasetTable';
import DashboardLayout from '../DashboardLayout';

export default function Datasets({ page }) {
  return (
    <DashboardLayout>
      <Box className="p-[24px] flex flex-col gap-[16px]">
        <TableFilter />
        <DatasetTable />
      </Box>
    </DashboardLayout>
  );
}
