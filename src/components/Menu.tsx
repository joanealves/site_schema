import React from 'react';
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

interface MenuProps {
  onServicesClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

const Menu: React.FC<MenuProps> = ({ 
  onServicesClick, onAboutClick, onContactClick 
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width="100%" 
      padding="0 16px"
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

        <Text
          display={{ base: "none", md: "block" }}
          textAlign="center" 
          fontSize="18px" 
          color="#EF3E66" 
          lineHeight="40px"
        >
          PREPARE-SE PARA SUBIR DE NÍVEL
        </Text>

        <Spacer />

        {/* Menu Desktop */}
        <Flex display={{ base: "none", md: "flex" }} gap="10px" alignItems="center">
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
            _hover={{bg: '#524f50', border: '1px solid white' }} 
            border="1px solid white" 
            borderRadius="6px"
            bg="transparent"
            cursor="pointer"
            fontWeight={500}
            onClick={onContactClick}
          >
            Fale Conosco
          </Button>
        </Flex>

        {/* Menu Hambúrguer para Mobile */}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          color="white"
          borderColor="white"
        />

        {/* Drawer (Menu Lateral) para Mobile */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="#222224">
            <DrawerCloseButton color="white" />
            <DrawerBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Text 
                onClick={() => {
                  if (onServicesClick) onServicesClick();
                  onClose();
                }}
                fontSize="18px"
                color="#EF3E66"
                _hover={{ color: "#FFFF" }}
                cursor="pointer"
                mb="20px"
              >
                Serviços
              </Text>
              <Text 
                onClick={() => {
                  if (onAboutClick) onAboutClick();
                  onClose();
                }}
                fontSize="18px"
                color="#EF3E66"
                _hover={{ color: "#FFFF" }}
                cursor="pointer"
                mb="20px"
              >
                Quem Somos
              </Text>
              <Button
                onClick={() => {
                  if (onContactClick) onContactClick();
                  onClose();
                }}
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
                mt="10px"
              >
                Fale Conosco
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Menu;