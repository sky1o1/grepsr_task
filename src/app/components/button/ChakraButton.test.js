import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ChakraButton } from './Button';

describe('ChakraButton', () => {
  const renderWithChakraProvider = (ui) => {
    return render(<ChakraProvider>{ui}</ChakraProvider>);
  };

  test('renders primary variant correctly', () => {
    renderWithChakraProvider(<ChakraButton variant="primary">Primary Button</ChakraButton>);
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass('bg-primary hover:bg-secondary hover:text-primary');
    expect(button).toHaveTextContent('Primary Button');
  });

  test('renders secondary variant correctly', () => {
    renderWithChakraProvider(<ChakraButton variant="secondary">Secondary Button</ChakraButton>);
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('bg-white hover:bg-gray-300');
    expect(button).toHaveTextContent('Secondary Button');
  });

  test('renders support variant correctly', () => {
    renderWithChakraProvider(<ChakraButton variant="support">Support Button</ChakraButton>);
    const button = screen.getByRole('button', { name: /support button/i });
    expect(button).toHaveClass('bg-secondary hover:bg-white');
    expect(button).toHaveTextContent('Support Button');
  });

  test('renders neutral variant correctly', () => {
    renderWithChakraProvider(<ChakraButton variant="neutral">Neutral Button</ChakraButton>);
    const button = screen.getByRole('button', { name: /neutral button/i });
    expect(button).toHaveClass('chakra-button');
    expect(button).toHaveTextContent('Neutral Button');
  });

  test('renders default variant correctly', () => {
    renderWithChakraProvider(<ChakraButton>Default Button</ChakraButton>);
    const button = screen.getByRole('button', { name: /default button/i });
    expect(button).toHaveTextContent('Default Button');
  });
});
