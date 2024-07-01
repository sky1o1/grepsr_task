import React from 'react';
import { Box, Button, Text, Switch } from '@chakra-ui/react';
import { DownloadIcon, EyeIcon, FilterIcon } from '/public/icons';

export const TableHeader = () => (
  <Box className="flex justify-between ">
    <Box className="flex gap-[12px]">
      <Button
        className="bg-primary hover:bg-secondary transition ease-out duration-300 hover:text-primary"
        colorScheme="primary">
        <Text className="font-medium font-man text-md"> Operations</Text>
      </Button>
      <Button leftIcon={FilterIcon} className="bg-white" colorScheme="white">
        <Text className="font-medium font-man text-md text-header ">Add filters </Text>
      </Button>
    </Box>

    <Box className="flex gap-[12px]">
      <Box className="flex items-center justify-between gap-[12px]">
        <Text className="font-man font-medium text-header">Edit mode</Text>
        <Switch />
      </Box>
      <Button leftIcon={EyeIcon}>
        <Text className="font-medium font-man text-md"> Show Metadata</Text>
      </Button>
      <Box className="icon"> {DownloadIcon}</Box>
    </Box>
  </Box>
);
