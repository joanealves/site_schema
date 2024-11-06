import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  VStack,
  chakra,
  shouldForwardProp,
  Image,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ERPSection from '../components/ErpSection';
import WhatsappButton from '../components/WhatsappButton';

// Criando o componente MotionBox que integra o Chakra UI com o Framer Motion
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface ContentCardProps {
  image?: string;
  text: string;
  isHighlight?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ image, text, isHighlight }) => {
  return (
    <VStack align="center" spacing="16px">
      <MotionBox
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Animação de escala suave ao passar o mouse
        mb="16px"
      >
        {image && <Image src={image} alt="ERP Icon" boxSize="60px" />}
      </MotionBox>
      <Text
        fontSize="sm"
        color={isHighlight ? '#25548A' : 'white'}
        fontWeight={isHighlight ? 'bold' : 'normal'}
        textAlign="center"
      >
        {text}
      </Text>
    </VStack>
  );
};

const ERPDevelopment = () => {
  return (
    <Box width="100%" bg="#222224" minHeight="100vh" pb="40px">
      <Menu />
      
      {/* Imagem da capa */}
      <Box width="100%" height="auto">
        <img
          src="/assets/erpcapa.jpg"
          alt="Imagem da Capa de ERP"
          style={{ width: '100%', height: '640px' }}
        />
      </Box>

      {/* Conteúdo principal */}
      <Flex justifyContent="center" mt="26px">
        <Box width="calc(100% - 200px)" maxWidth="1131px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={{ base: '20px', md: '230px' }} spacingY="26px" pb="40px">
            <VStack spacing="26px">
              <ContentCard
                image="/assets/erptalk.svg"
                text="Análise e Consultoria Especializada."
              />
              <ContentCard
                image="/assets/erpintegracao.svg"
                text="Integração sem Complicações."
              />
              <ContentCard
                image="/assets/erpsecurity.svg"
                text="Segurança e Conformidade."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/assets/erpconfig.svg"
                text="Personalização Abrangente."
              />
              <ContentCard
                image="/assets/erpsuporte.svg"
                text="Treinamento Especializado e Suporte Contínuo."
              />
              <ContentCard
                image="/assets/erppower.svg"
                text="Potencialize seu Negócio com um ERP personalizado."
                isHighlight
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* ERPSection, Contato e Footer */}
      <ERPSection />
      <Contact />
      <WhatsappButton />
      <Footer />
    </Box>
  );
};

export default ERPDevelopment;