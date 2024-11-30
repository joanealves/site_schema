import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { BsRocketTakeoff } from 'react-icons/bs';
import { motion } from 'framer-motion';

const LevelSection = () => {
  return (
    <Flex
      bg="#9D334B"
      width="100%"
      height={{base: 'auto', md: '264px'}}
      gap={{base: '16px', md: '0'}}
      p={{base: '16px', md: '60px 100px'}}
      justifyContent="space-between"
      alignItems="center"
      direction={{base: 'column', md: 'row'}}
    >
      <Text 
        fontSize={{base: '16px', md: '24px'}}
        fontWeight="bold" 
        mb="18px" 
        color="white" 
        textShadow="2px 2px 4px rgba(0,0,0,0.5)" textAlign="center">
        PREPARE-SE PARA SUBIR DE NÍVEL
      </Text>

      <Flex flex="1" justifyContent="center" alignItems="center">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BsRocketTakeoff size="100px" color="white" />
        </motion.div>
      </Flex>

      <Text fontSize="16px" w={{base: '100%', md: '40%'}}>
        Desenvolvemos sistemas pensados exclusivamente para o seu processo e modelo de negócio, com foco na otimização e aumento da produtividade. Destaque-se dos concorrentes e alcance um novo patamar de eficiência!
      </Text>
    </Flex>
  );
};

export default LevelSection;
