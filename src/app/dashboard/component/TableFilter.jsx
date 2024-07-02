import { Box, Text, Switch } from '@chakra-ui/react';
import { DownloadIcon, EyeIcon, FilterIcon } from '../../components';
import { ChakraButton } from '../../components';

export const TableFilter = () => (
  <Box className="flex justify-between">
    <Box className="flex gap-[12px]">
      <ChakraButton variant="primary">
        <Text className="font-medium font-man text-md">Operations</Text>
      </ChakraButton>
      <ChakraButton variant="secondary" leftIcon={FilterIcon}>
        <Text className="font-medium font-man text-md text-header">Add filters</Text>
      </ChakraButton>
    </Box>

    <Box className="flex gap-[12px]">
      <Box className="flex items-center justify-between gap-[12px]">
        <Text className="font-man font-medium text-header">Edit mode</Text>
        <Switch />
      </Box>
      <ChakraButton variant="secondary" leftIcon={EyeIcon}>
        <Text className="font-medium font-man text-md text-header"> Show Metadata</Text>
      </ChakraButton>

      <Box className="icon"> {DownloadIcon}</Box>
    </Box>
  </Box>
);
