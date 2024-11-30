import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

interface WebSectionProps {
  imageSrc: string;
  bgColor?: string; // Prop opcional para a cor de fundo
}

const WebSection: React.FC<WebSectionProps> = ({ imageSrc, bgColor = "#EF3E66" }) => {
  return (
    <Box width="100%" bg={bgColor} display="flex" justifyContent="center" alignItems="center" py={{ base: '24px', md: '0' }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width="100%"  
        align="center"
        justify="center"
        height={{ base: 'auto', md: '246px' }}
        px={{ base: '16px', md: '64px' }}
      >
        <Text
          color="#FFF"
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign={{ base: 'center', md: 'justify' }}
          width="100%"  
          maxWidth="737px"  
          lineHeight="tall"
          display="flex"
          alignItems="center"
          mb={{ base: '16px', md: '0' }}
        >
          Na Schema, estamos comprometidos em fornecer soluções de Desenvolvimento web de alta qualidade e sob medida para atender às necessidades específicas do seu negócio. Nossa equipe de especialistas está pronta para oferecer um sistema de gestão de conteúdo integrado que revolucionará a maneira como você opera online.
        </Text>
        
        <Box width={{ base: '80%', md: '429px' }} height={{ base: 'auto', md: '208px' }}>
          <Image
            src={imageSrc} 
            alt="Imagem Customizada para WebSection"
            width="100%"
            height="100%"
            objectFit="cover"
            mx="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default WebSection;
