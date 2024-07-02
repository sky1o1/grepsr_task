'use client';

import { useRouter } from 'next/navigation';
import { Box, Avatar, Text, Tooltip } from '@chakra-ui/react';
import { ArrowIcon, BellIcon, DataIcon, InfoIcon, InfiniteIcon } from '../components';

export const TopBar = () => {
  const router = useRouter();
  return (
    <Box
      className="flex bg-white items-center justify-between h-14
    py-[18px] px-[32px] border-b border-gray-200  ">
      <Box className="flex items-center">
        <Box className="icon" onClick={() => router.push('/dashboard')}>
          {ArrowIcon}
        </Box>
        <Text className="font-bold text-header font-man text-lg ml-[12px] mr-[8px] ">
          Amazon product price
        </Text>
        <Box className="icon">
          <Tooltip label="Info">{InfoIcon}</Tooltip>
        </Box>
      </Box>

      <Box className="flex items-center gap-[16px]">
        <Box className="flex p-[5px] h-[26px] items-center gap-[5px] bg-badge rounded-[22px]">
          {DataIcon}
          <Text className="flex flex-row text-sm font-semibold">Credit usage: 1018 /</Text>
          {InfiniteIcon}
        </Box>
        <Box className="icon"> {BellIcon}</Box>

        <Avatar
          className="cursor-pointer"
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Box>
    </Box>
  );
};
