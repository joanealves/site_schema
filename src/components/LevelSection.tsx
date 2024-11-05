import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { BsRocketTakeoff } from 'react-icons/bs';
import { motion } from 'framer-motion';

const LevelSection = () => {
  return (
    <Flex
      bg="#9D334B"
      width="100%"
      height="264px"
      p="60px 100px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flex="2" mr="50px" flexDirection="column" alignItems="center">
        <Text fontSize="24px" fontWeight="bold" mb="18px" color="white" textShadow="2px 2px 4px rgba(0,0,0,0.5)" textAlign="center">
          PREPARE-SE PARA SUBIR DE NÍVEL
        </Text>
      </Flex>

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

      <Box flex="2" textAlign="left" color="white" ml="50px">
        <Text fontSize="16px" lineHeight="tall" textAlign="justify">
          Desenvolvemos sistemas pensados exclusivamente para o seu processo e modelo de negócio, com foco na otimização e aumento da produtividade. Destaque-se dos concorrentes e alcance um novo patamar de eficiência!
        </Text>
      </Box>
    </Flex>
  );
};

export default LevelSection;
