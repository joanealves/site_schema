import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  VStack,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import WebSection from '../components/WebSection';
import WhatsappButton from '../components/WhatsappButton';
import Contact from '../components/Contact';

// Criando o componente MotionBox que integra o Chakra UI com o Framer Motion
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ContentCard: React.FC<{
  image: string;
  title: string;
  text: string;
  isHighlight?: boolean;
}> = ({ image, title, text, isHighlight }) => {
  return (
    <VStack align="center" spacing="16px">
      <MotionBox
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Animação de escala suave ao passar o mouse
        mb="16px"
      >
        <img
          src={image}
          alt={title}
          style={{ width: '60px', height: '60px' }}
        />
      </MotionBox>
      <Text
        fontSize="sm"
        color={isHighlight ? '#E75475' : '#FFF'}
        textAlign="center"
      >
        {text}
      </Text>
    </VStack>
  );
};

const WebDevelopment = () => {
  return (
    <Box width="100%" bg="#222224" minHeight="100vh" pb="40px">
      {/* Menu */}
      <Menu />

      {/* Imagem da capa específica para a página de desenvolvimento */}
      <Box width="100%" height="auto">
        <img
          src="/assets/capadev.jpg"
          alt="Imagem da Capa de Desenvolvimento"
          style={{ width: '100%', height: '640px' }}
        />
      </Box>

      {/* Conteúdo da página */}
      <Flex justifyContent="center" mt="26px">
        <Box width="calc(100% - 200px)" maxWidth="1131px">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacingX={{ base: '20px', md: '230px' }}
            spacingY="26px"
            pb="40px" 
          >
            <VStack spacing="26px">
              <ContentCard
                image="/assets/iconmarca.svg"
                title="Design Distinto e Personalizado"
                text="Cada site e landing page que criamos é único e alinhado com a identidade visual da sua marca."
              />
              <ContentCard
                image="/assets/iconresponsive.svg"
                title="Responsividade em Todos os Dispositivos"
                text="Seu site ou landing page será perfeitamente funcional em desktops, tablets e smartphones."
              />
              <ContentCard
                image="/assets/iconmanutence.svg"
                title="Manutenção e Suporte Contínuos"
                text="Fornecemos suporte técnico contínuo e atualizações regulares."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/assets/iconexperiencia.svg"
                title="Foco na Conversão e Usabilidade"
                text="Priorizamos a usabilidade e a experiência do usuário."
              />
              <ContentCard
                image="/assets/iconform.svg"
                title="Integração com Ferramentas Essenciais"
                text="Integramos funcionalidades essenciais como formulários de contato."
              />
              <ContentCard
                image="/assets/iconroxo.svg"
                title="Elevando Sua Presença Online com Sites Incríveis"
                text="Nossa equipe de especialistas em design e desenvolvimento está pronta para transformar sua visão em realidade."
                isHighlight
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* WebSection */}
      <WebSection />

      {/* Botão do WhatsApp */}
      <WhatsappButton />

      {/* Seção de contato */}
      <Contact />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default WebDevelopment;