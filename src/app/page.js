import React from 'react';
import { Sidebar } from './components/sidebar';
import { MainPage } from './components/mainpage';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <main className="m-0 bg-gray-200 h-auto w-full">
      <Box className="flex flex-row ">
        <Sidebar />
        <MainPage />
      </Box>
    </main>
  );
}
