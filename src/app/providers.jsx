// app/providers.tsx
'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}
