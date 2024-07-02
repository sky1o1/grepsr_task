import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Tags } from './Tags';

describe('Tags', () => {
  const renderWithChakraProvider = (ui) => {
    return render(<ChakraProvider>{ui}</ChakraProvider>);
  };

  test('renders True badge when value is true', () => {
    renderWithChakraProvider(<Tags value={true} />);
    const badge = screen.getByText('True');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('chakra-badge');
    async () => {
      await waitFor(() => {
        expect(badge).toHaveAttribute('colorScheme', 'red');
      });
    };
  });

  test('renders False badge when value is false', () => {
    renderWithChakraProvider(<Tags value={false} />);
    const badge = screen.getByText('False');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('chakra-badge');
    async () => {
      await waitFor(() => {
        expect(badge).toHaveAttribute('colorScheme', 'green');
      });
    };
  });
});
