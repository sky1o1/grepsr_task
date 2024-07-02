import { Box, Text, Image, Heading } from '@chakra-ui/react';
import DashboardLayout from './DashboardLayout';

export default function Datasets() {
  return (
    <DashboardLayout>
      <Box className="p-[24px] flex flex-col gap-[16px]">
        <Box className="flex flex-col gap-[12px] items-center">
          <Heading className="font-man">Empowering businesses with actionable web data</Heading>
          <Text className="font-man font-semibold text-md">
            Although almost a decade has passed since Grepsr’s founding, our values continue to be
            deeply rooted in our start-up spirit. Collaboration is highly encouraged and no idea is
            ever left unexplored. We take pride in the incredible team of talented and passionate
            people who have joined us on this journey. Our values are embodied in our culture, in
            how we treat each other, and in how we work with our customers.
          </Text>
          <Image src="/grepsr.png" boxSize="500px" alt="grepsr" />
        </Box>
      </Box>
    </DashboardLayout>
  );
}
