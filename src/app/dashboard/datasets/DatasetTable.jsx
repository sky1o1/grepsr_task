'use client';

import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { FilterIcon, LetterIcon, TableChakra, Tags } from '../../components';
import { fetchDataset } from '../../services';

export const DatasetTable = () => {
  const { isLoading, data } = useQuery('todo', fetchDataset);
  const todoData = useMemo(() => data ?? [], [data]);
  const dataList = todoData?.slice(0, 10);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: () => (
          <Box className="table-header">
            <Box className="flex header-label">{LetterIcon}ID</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        )
      },
      {
        accessorKey: 'title',
        header: () => (
          <Box className="table-header">
            <Box className="header-label">{LetterIcon}Title</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        )
      },
      {
        accessorKey: 'userId',
        header: () => (
          <Box className="table-header">
            <Box className="flex header-label">{LetterIcon}User ID</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        )
      },
      {
        accessorKey: 'completed',
        header: () => (
          <Box className="table-header">
            <Box className="flex header-label">{LetterIcon}Status</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        ),
        cell: (value) => <Tags value={value?.row?.original?.completed} />
      }
    ],
    []
  );
  return <TableChakra data={dataList} columns={columns} isLoading={isLoading} />;
};
