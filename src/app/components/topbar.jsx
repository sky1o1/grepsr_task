'use client';

import React from 'react';
import { Box, Avatar, Text } from '@chakra-ui/react';
import { ArrowIcon, BellIcon, DataIcon, InfoIcon, InfiniteIcon } from '/public/icons';

export const TopBar = () => {
  return (
    <Box
      className="flex bg-white items-center  justify-between h-14
    py-[18px] px-[32px] border-b border-gray-200  ">
      <Box className="flex items-center">
        <Box className="icon"> {ArrowIcon}</Box>
        <Text className="font-bold text-header font-man text-lg ml-[12px] mr-[8px] ">
          Amazon product price
        </Text>
        <Box className="icon">{InfoIcon}</Box>
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
