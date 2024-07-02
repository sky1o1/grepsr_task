import { Box } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import { TopBar } from './Topbar';

export default function DashboardLayout({ children }) {
  return (
    <main className="m-0 bg-background h-auto w-full">
      <Box className="flex flex-row ">
        <Sidebar />
        <Box className="flex flex-col w-[calc(100%-212px)]">
          <TopBar />
          {children}
        </Box>
      </Box>
    </main>
  );
}
