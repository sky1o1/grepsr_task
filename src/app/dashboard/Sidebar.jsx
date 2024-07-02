'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Text } from '@chakra-ui/react';
import { DataSetsIcon, WorkflowIcon, CreditUsageIcon, ChakraButton } from '../components';

const sidebarConst = [
  {
    label: 'Datasets',
    icon: DataSetsIcon,
    route: 'datasets'
  },
  {
    label: 'Workflows',
    icon: WorkflowIcon,
    route: 'workflows'
  },
  {
    label: 'Credit Usage',
    icon: CreditUsageIcon,
    route: 'credit-usage'
  }
];

export const Sidebar = () => {
  const router = useRouter();

  let url;
  if (typeof window !== 'undefined') {
    url = window.location.href;
  } else {
    url = '';
  }
  const parts = url.split('/');
  const currentUrl = parts[parts.length - 1];

  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (route) => {
    setActiveTab(route);
    router.push(`/dashboard/${route}`);
  };

  useEffect(() => {
    setActiveTab(currentUrl);
  }, [currentUrl]);

  return (
    <Box className="flex bg-white h-screen flex-col w-[212px]  pb-[22px] border-r border-gray-200">
      <Box
        onClick={() => router.push('/dashboard')}
        className="flex  items-center h-14  py-[22px] pl-[24px] border-b border-gray-200 cursor-pointer">
        <Text className="font-bold text-header font-man text-lg">Grepsr</Text>
      </Box>

      <Box className="py-[24px] px-[16px] flex flex-col gap-[8px] ">
        {sidebarConst.map((item, index) => (
          <Box
            key={index}
            onClick={() => {
              handleTabClick(item?.route);
            }}
            className={`flex py-[10px] px-[16px] items-center rounded-md hover:bg-secondary cursor-pointer hover:text-primary transition ease-out duration-500
                 ${activeTab === item?.route ? 'bg-secondary hover:bg-secondary text-primary' : null}`}>
            <Box className={`w-[24px] h-[24px] mr-[2px] text-red-400`}>{item.icon}</Box>
            <Text className="hover:text-primary text-md font-man font-medium">{item.label}</Text>
          </Box>
        ))}
      </Box>

      <Box className="flex flex-col w-[180px] h-[100px] bg-background rounded-md ml-[16px] mb-[20px] justify-center items-center gap-[12px] fixed bottom-0">
        <Text className="text-md">Need any help?</Text>
        <ChakraButton variant="support">
          <Text className="font-medium font-man text-md text-primary">Contact Support</Text>
        </ChakraButton>
      </Box>
    </Box>
  );
};
