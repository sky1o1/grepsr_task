'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { TopBar } from './topbar';
import { TablePage } from './tablepage';

export const MainPage = () => {
  return (
    <Box className="flex flex-col w-[calc(100%-212px)]">
      <TopBar />
      <TablePage />
    </Box>
  );
};
