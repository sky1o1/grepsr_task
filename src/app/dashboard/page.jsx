import { Box } from '@chakra-ui/react';
import DashboardLayout from './DashboardLayout';
import { DatasetTable } from './datasets/DatasetTable';
import { TableFilter } from './component';

export default function Datasets() {
  return (
    <DashboardLayout>
      <Box className="p-[24px] flex flex-col gap-[16px]">
        <TableFilter />
        <DatasetTable />
      </Box>
    </DashboardLayout>
  );
}
