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
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface ContactProps {
  buttonColor?: string; 
}

const Contact: React.FC<ContactProps> = ({ buttonColor = "#9D334B" }) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="center"
      backgroundColor="#1A1A1A"
      p={10}
    >
      <Flex
        width="80%"
        maxWidth="1200px"
        height="660px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
        style={{
          background: 'linear-gradient(90deg, rgba(37, 84, 138, 0.04) 50%, transparent 50%)' 
        }}
      >
        <Box
          width="50%"
          p={20}
          bg="transparent" 
          color="white"
          position="relative"
        >
          <Text fontSize="24px" fontWeight="bold" ml={16} mb={4}>Fale conosco!</Text>
          <Text fontSize="16px" ml={16} mb={13}>Atendimento especializado.</Text>
          <VStack align="start" mt={113} ml={16} spacing={50}>
            <HStack spacing={25}>
              <Icon as={PhoneIcon} w={17} h={17} />
              <Text>+31 97164-0627</Text>
            </HStack>
            <HStack spacing={25}>
              <Icon as={EmailIcon} w={17} h={17} />
              <Text>contato@schema.com</Text>
            </HStack>
            <HStack spacing={25}>
              <Icon as={FaMapMarkerAlt} w={17} h={17} />
              <Text>São João Batista - Belo Horizonte</Text>
            </HStack>
          </VStack>
          <Box position="absolute" bottom="10px" right="10px">
            <Image 
              src="/assets/esferas_azuis.png" 
              alt="Decorative Image" 
              width="283px" 
              height="209px"
              objectFit="cover"
            />
          </Box>
        </Box>

        <Flex
          width="50%"
          p={10}
          flexDirection="column"
          justifyContent="center"
          bg="#2D2D2D"
          color="white"
        >
          <FormControl mb="45px">
            <FormLabel color="white">Nome</FormLabel>
            <Input 
              placeholder="Digite seu nome" 
              variant="flushed"
              _placeholder={{ color: '#A0AEC0' }}
              focusBorderColor="white"
              size="lg"
              height="60px"  
              borderBottom="1px solid white"
              width="50%"  
            />
          </FormControl>
          <HStack spacing="40px" mb="45px">
            <FormControl width="50%">
              <FormLabel color="white">Email</FormLabel>
              <Input 
                placeholder="Digite seu email" 
                variant="flushed"
                _placeholder={{ color: '#A0AEC0' }}
                focusBorderColor="white"
                size="lg"
                height="60px" 
                borderBottom="1px solid white"
                width="100%"  
              />
            </FormControl>
            <FormControl width="50%">
              <FormLabel color="white">Telefone</FormLabel>
              <Input 
                placeholder="Digite seu telefone" 
                variant="flushed"
                _placeholder={{ color: '#A0AEC0' }}
                focusBorderColor="white"
                size="lg"
                height="60px"  
                borderBottom="1px solid white"
                width="100%"  
              />
            </FormControl>
          </HStack>
          <FormControl mb="45px">
            <FormLabel color="white">Mensagem</FormLabel>
            <Textarea 
              placeholder="Digite sua mensagem" 
              variant="flushed"
              _placeholder={{ color: '#A0AEC0' }}
              focusBorderColor="white"
              size="lg"
              height="120px"
              borderBottom="1px solid white"
              width="550px"  
              mr="15px"  
            />
          </FormControl>
          <Button 
            mt={4} 
            bg={buttonColor}
            color="white"
            width="146px"  
            height="60px"  
            fontWeight="bold"
            borderRadius="6px"
            _hover={{ bg: "pink.600" }}
          >
            Enviar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
