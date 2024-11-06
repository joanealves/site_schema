import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const ERPSection = () => {
  return (
    <Box width="100%" height="265px" bg="#4E57A7" display="flex" justifyContent="center" alignItems="center">
      <Flex
        width="100%"
        maxW="1200px" 
        align="center"
        justify="space-between"
      >
        <Text
          color="#FFF"
          fontSize="lg"
          textAlign="justify"
          width="737px"
          height="156px"
          lineHeight="tall" 
          display="flex"
          alignItems="center" 
        >
          Na Schema, estamos comprometidos em fornecer soluções de ERP de alta qualidade e sob medida para atender às necessidades específicas do seu negócio. Nossa equipe de especialistas está pronta para oferecer um sistema de gestão integrado que revolucionará a maneira como você opera.
        </Text>
        <Box
          height="208px"
          width="429px"
          bgImage="url('/assets/erp.png')" 
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center 70%"
          ml="64px"
        />
      </Flex>
    </Box>
  );
};

export default ERPSection;
