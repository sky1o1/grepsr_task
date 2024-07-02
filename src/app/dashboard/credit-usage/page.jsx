'use client';

import { Box } from '@chakra-ui/react';
import DashboardLayout from '../DashboardLayout';
import { TableFilter } from '../component';
import { CreditUsageTable } from './CreditUsageTable';

export default function Datasets({ page }) {
  return (
    <DashboardLayout>
      <Box className="p-[24px] flex flex-col gap-[16px]">
        <TableFilter />
        <CreditUsageTable />
      </Box>
    </DashboardLayout>
  );
}
