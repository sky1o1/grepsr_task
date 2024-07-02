import { Badge, Box } from '@chakra-ui/react';

export const Tags = ({ value }) => {
  return (
    <Box>
      {value ? <Badge colorScheme="red">True</Badge> : <Badge colorScheme="green">False</Badge>}
    </Box>
  );
};
