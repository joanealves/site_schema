import { Text, VStack, Icon } from '@chakra-ui/react';

import { motion } from 'framer-motion';

// Usa motion.div diretamente em vez de combinar com chakra
const MotionBox = motion.div;

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    color: string;
    info: string;
}

export default function ProjectJourneyCards({color, info, icon}: Props) {
  return (
    <VStack spacing="24px">
        <MotionBox 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Icon as={icon} color={color} width="50px" height="50px"/>
        </MotionBox>
        <Text textAlign="left" fontSize="sm" minHeight="160px">
            {info}
        </Text>
    </VStack>
  )
}
