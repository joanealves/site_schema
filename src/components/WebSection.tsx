import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

interface WebSectionProps {
  imageSrc: string;
  bgColor?: string; 
}

const WebSection: React.FC<WebSectionProps> = ({ imageSrc, bgColor = "#EF3E66" }) => {
  return (
    <Box width="100%" height="246px" bg={bgColor} display="flex" justifyContent="center" alignItems="center">
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
          ml="64px" 
        >
          Na Schema, estamos comprometidos em fornecer soluções de Desenvolvimento web de alta qualidade e sob medida para atender às necessidades específicas do seu negócio. Nossa equipe de especialistas está pronta para oferecer um sistema de gestão de conteúdo integrado que revolucionará a maneira como você opera online.
        </Text>
        
        <Box width="429px" height="208px" ml="64px">
          <Image
            src={imageSrc} 
            alt="Imagem Customizada para WebSection"
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
