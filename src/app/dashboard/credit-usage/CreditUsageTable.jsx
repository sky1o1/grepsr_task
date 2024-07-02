'use client';

import { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { FilterIcon, LetterIcon, TableChakra } from '../../components';
import { fetchDataUsage } from '../../services';

export const CreditUsageTable = () => {
  const { isLoading, data } = useQuery('comment', fetchDataUsage);
  const commentData = useMemo(() => data ?? [], [data]);
  const dataList = commentData?.slice(0, 10);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: () => (
          <Box className="table-header">
            <Box className="header-label">{LetterIcon}ID</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        )
      },
      {
        accessorKey: 'name',
        header: () => (
          <Box className="table-header">
            <Box className="header-label">{LetterIcon}Name</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        ),
        cell: (value) => <Text>{value?.row?.original?.name?.substring(0, 20) + '...'}</Text>
      },
      {
        accessorKey: 'email',
        header: () => (
          <Box className="table-header">
            <Box className="header-label">{LetterIcon}Email</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        )
      },
      {
        accessorKey: 'body',
        header: () => (
          <Box className="table-header">
            <Box className="header-label">{LetterIcon}Body</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        ),
        cell: (value) => <Text>{value?.row?.original?.body?.substring(0, 20) + '...'}</Text>
      }
    ],
    []
  );
  return <TableChakra data={dataList} columns={columns} isLoading={isLoading} />;
};
