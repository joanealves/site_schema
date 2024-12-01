import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Input,
  Textarea,
  HStack,
  Icon,
  FormControl,
  FormLabel,
  Image,
  Grid,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

interface ContactProps {
  buttonColor?: string; // Prop opcional para a cor do botão
}

const Contact: React.FC<ContactProps> = ({ buttonColor = "#9D334B" }) => {
  return (
   <VStack gap="16px" bg="#222428">
    <Flex 
      direction={{ base: 'column', md: 'row' }} 
      width="100%" 
      gap="24px"
      p="16px"
      bg="#222224"
    >
      <Grid gap="24px" templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
        <FormControl >
          <FormLabel m="0" color="white">Nome</FormLabel>
          <Input 
            placeholder="Digite seu nome" 
            variant="flushed"
            _placeholder={{ color: '#A0AEC0' }}
            focusBorderColor="#9D334B"
            size="lg"
            borderBottom="1px solid white"
          />
        </FormControl>
        <FormControl>
          <FormLabel m="0" color="white">Telefone</FormLabel>
          <Input 
            placeholder="Digite seu telefone" 
            variant="flushed"
            _placeholder={{ color: '#A0AEC0' }}
            focusBorderColor="#9D334B"
            size="lg"
            borderBottom="1px solid white"
          />
        </FormControl>
      </Grid>

      <FormControl>
        <FormLabel m="0" color="white">Email</FormLabel>
        <Input 
          placeholder="Digite seu email" 
          variant="flushed"
          _placeholder={{ color: '#A0AEC0' }}
          focusBorderColor="#9D334B"
          size="lg"
          borderBottom="1px solid white"
          width="100%"  
        />
      </FormControl>

      <FormControl>
        <FormLabel m="0" color="white">Mensagem</FormLabel>
        <Textarea 
          placeholder="Digite sua mensagem" 
          variant="flushed"
          _placeholder={{ color: '#A0AEC0' }}
          focusBorderColor="#9D334B"
          size="lg"
          borderBottom="1px solid white"
        />
      </FormControl>

      <Box width="100%" textAlign="center" mt="16px">
        <Button 
          bg={buttonColor}
          color="white"
          width="146px"  
          height="36px"  
          fontWeight="bold"
          borderRadius="6px"
          _hover={{ bg: "pink.600" }}
        >
          Enviar
        </Button>
      </Box>
    </Flex>

    <VStack width="100%" alignItems="start" gap="28px">
      <Box p="0 16px">
        <Text fontSize="24px" fontWeight="bold">Fale conosco!</Text>
        <Text fontSize="16px">Atendimento especializado.</Text>
      </Box>

      <VStack align="start" gap="36px" p="16px" pb="0">
        <HStack spacing={25}>
          <Icon as={PhoneIcon} w={17} h={17} />
          <Text>+31 97164-0627</Text>
        </HStack>
        <HStack spacing={25}>
          <Icon as={EmailIcon} w={17} h={17} />
          <Text>contato@schema.com</Text>
        </HStack>
      </VStack>

      <Flex justify="end" w="100%">
        <Image 
          src="/assets/esferas_azuis.png" 
          alt="Decorative Image" 
        />
      </Flex>

    </VStack>
   </VStack>
  );
};

export default Contact;