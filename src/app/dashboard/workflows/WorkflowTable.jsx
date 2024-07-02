'use client';

import { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { FilterIcon, LetterIcon, TableChakra } from '../../components';
import { fetchWorkflow } from '../../services';

export const WorkflowTable = () => {
  const { isLoading, data } = useQuery('posts', fetchWorkflow);
  const postData = useMemo(() => data ?? [], [data]);
  const dataList = postData?.slice(0, 10);

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
            <Box className="flex header-label">{LetterIcon}Title</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        ),
        cell: (value) => <Text>{value?.row?.original?.title?.substring(0, 20) + '...'}</Text>
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
        accessorKey: 'body',
        header: () => (
          <Box className="table-header">
            <Box className="header-label">{LetterIcon}Body</Box>
            <Box className="cursor-pointer">{FilterIcon}</Box>
          </Box>
        ),
        cell: (value) => <Text>{value?.row?.original?.body?.substring(0, 50) + '...'}</Text>
      }
    ],
    []
  );
  return <TableChakra data={dataList} columns={columns} isLoading={isLoading} />;
};
