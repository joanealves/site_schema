import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const WebSection = () => {
  return (
    <Box width="100%" height="246px" bg="#EF3E66" display="flex" justifyContent="center" alignItems="center">
      <Flex
        width="100%"  
        align="center"
        justify="space-between"
        height="100%"
      >
        <Text
          color="#FFF"
          fontSize="lg"
          textAlign="justify"
          width="100%"  
          maxWidth="737px"  
          lineHeight="tall"
          display="flex"
          alignItems="center"
          ml="64px"  // Margem à esquerda adicionada
        >
          Na Schema, estamos comprometidos em fornecer soluções de Desenvolvimento web de alta qualidade e sob medida para atender às necessidades específicas do seu negócio. Nossa equipe de especialistas está pronta para oferecer um sistema de gestão de conteúdo integrado que revolucionará a maneira como você opera online.
        </Text>
        
        <Box width="429px" height="208px" ml="64px">
          <Image
            src="/assets/mobile.png"
            alt="Web Development Image"
            width="429px"
            height="208px"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default WebSection;