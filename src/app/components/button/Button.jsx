import { Button } from '@chakra-ui/react';

export const ChakraButton = ({ variant, children, ...rest }) => {
  let buttonComponent;

  switch (variant) {
    case 'primary':
      buttonComponent = (
        <Button
          className="bg-primary hover:bg-secondary hover:text-primary"
          colorScheme="primary"
          {...rest}>
          {children}
        </Button>
      );
      break;
    case 'secondary':
      buttonComponent = (
        <Button className="bg-white hover:bg-gray-300" colorScheme="primary" {...rest}>
          {children}
        </Button>
      );
      break;
    case 'support':
      buttonComponent = (
        <Button className="bg-secondary hover:bg-white " colorScheme="primary" {...rest}>
          {children}
        </Button>
      );
      break;
    case 'neutral':
      buttonComponent = (
        <Button colorScheme="gray" {...rest}>
          {children}
        </Button>
      );
      break;
    default:
      buttonComponent = <Button {...rest}>{children}</Button>;
      break;
  }
  return buttonComponent;
};
