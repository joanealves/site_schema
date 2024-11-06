import { Box, Text, VStack, StackProps } from '@chakra-ui/react';

interface FooterProps {
  bgColor?: string;
}

const Footer: React.FC<FooterProps> = ({ bgColor = "#9D334B" }) => {
  return (
    <Box
      bg={bgColor} 
      color="white" 
      height="60px" 
      width="100%" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      boxSizing="border-box"
    >
      <VStack spacing={0} as={Box as React.FC<StackProps>}>
        <Text fontSize="lg" fontWeight="bold">SCHEMA</Text>
        <Text fontSize="sm">Todos os direitos reservados @schema2023</Text>
      </VStack>
    </Box>
  );
};

export default Footer;