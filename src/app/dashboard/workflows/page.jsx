'use client';

import { Box } from '@chakra-ui/react';
import DashboardLayout from '../DashboardLayout';
import { WorkflowTable } from './WorkflowTable';
import { TableFilter } from '../component';

export default function Datasets({ page }) {
  return (
    <DashboardLayout>
      <Box className="p-[24px] flex flex-col gap-[16px]">
        <TableFilter />
        <WorkflowTable />
      </Box>
    </DashboardLayout>
  );
}
