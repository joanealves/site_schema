import React from 'react';
import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

interface MenuProps {
  onServicesClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

const Menu: React.FC<MenuProps> = ({ onServicesClick, onAboutClick, onContactClick }) => {
  return (
    <Box
      width="100%" 
      padding="0 20px"
      fontFamily="'Quicksand', sans-serif"
      position="fixed"           
      top="0"                   
      zIndex="1000"             
      backgroundColor="#222224"  
      boxSizing="border-box"
    >
      <Flex
        maxWidth="1390px"
        height="60px"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/">
          <Box cursor="pointer">
            <img src="../assets/logo.png" alt="Logo Schema" style={{ width: '100px', height: '40px' }} />
          </Box>
        </Link>

        <Spacer />

        <Text textAlign="center" fontSize="18px" color="#EF3E66" lineHeight="40px">
          PREPARE-SE PARA SUBIR DE NÍVEL
        </Text>

        <Spacer />

        <Flex gap="10px" alignItems="center">
          <Text 
            onClick={onServicesClick} 
            fontSize="18px" 
            color="#EF3E66" 
            _hover={{ color: "#FFFF" }} 
            cursor="pointer"
          >
            Serviços
          </Text>
          <Text 
            onClick={onAboutClick} 
            fontSize="18px" 
            color="#EF3E66" 
            _hover={{ color: "#FFFF" }} 
            cursor="pointer"
          >
            Quem Somos
          </Text>
          <Button
            mt="10px"
            mb="6px"
            variant="outline"
            borderColor="white" 
            color="white"
            width="119px"
            height="40px"
            _hover={{ color: "#EF3E66" }} 
            border="2px solid white" 
            borderRadius="6px"
            bg="transparent"
            cursor="pointer"
            onClick={onContactClick}
          >
            Fale Conosco
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Menu;
