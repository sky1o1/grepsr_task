'use client';

import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { DataSetsIcon, WorkflowIcon, CreditUsageIcon } from '/public/icons';

const sidebarConst = [
  {
    label: 'Datasets',
    icon: DataSetsIcon,
    active: false,
    action: () => null
  },
  {
    label: 'Workflows',
    icon: WorkflowIcon,
    active: false,
    action: () => null
  },
  {
    label: 'Credit Usage',
    icon: CreditUsageIcon,
    active: false,
    action: () => null
  }
];

export const Sidebar = () => {
  const [activeState, setActiveState] = useState(false);

  const toggleActiveState = (tabState) => {
    setActiveState(!tabState);
  };

  return (
    <Box className="flex bg-white h-screen flex-col w-[212px]  pb-[22px] border-r border-gray-200">
      <Box className="flex  items-center h-14  py-[22px] pl-[24px] border-b   border-gray-200">
        <Text className="font-bold   text-header font-man  text-lg  ">Grepsr</Text>
      </Box>

      <Box className="py-[24px] px-[16px] flex flex-col gap-[8px] ">
        {sidebarConst?.map((item, key) => {
          console.log(item?.active, activeState);
          return (
            <Box
              key={key}
              onClick={() => toggleActiveState(item?.active)}
              className={`flex py-[10px] px-[16px] items-center rounded-md cursor-pointer
               ${item?.active === activeState}
                  ? ' hover:bg-secondary  hover:text-primary transition ease-out duration-500'
                  : ' hover:bg-secondary'`}>
              <Box className="w-[24px] h-[24px] mr-[2px] ">{item?.icon}</Box>
              <Text
                className={
                  item?.active === activeState
                    ? 'text-header text-md font-man'
                    : ' font-man text-md'
                }>
                {item?.label}
              </Text>
            </Box>
          );
        })}
      </Box>

      <Box
        className="flex flex-col w-[180px] h-[100px] bg-card
        rounded-md ml-[16px] mb-[20px] justify-center items-center gap-[12px] fixed bottom-0">
        <p className="text-md">Need any help?</p>
        <Box
          className="text-primary text-md bg-secondary px-[10px] py-[6px]
        rounded-md cursor-pointer
         hover:bg-primary hover:text-white transition ease-out duration-500">
          Contact Support
        </Box>
      </Box>
    </Box>
  );
};
