import React, { useEffect, useState, useRef } from 'react';
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

import WhatsappButton from '../components/WhatsappButton';
import WebSection from '../components/WebSection';


const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface ContentCardProps {
  image: string;
  text: string;
  isHighlight?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ image, text, isHighlight }) => {
  return (
    <VStack align="center" spacing="16px">
      <MotionBox
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} 
        mb="16px"
      >
        <Image src={image} alt="logo ux" boxSize="60px" objectFit="cover" />
      </MotionBox>
      <Text fontSize="sm" color={isHighlight ? '#25548A' : '#FFF'} textAlign="center">
        {text}
      </Text>
    </VStack>
  );
};

const UXDevelopment: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!hydrated) return null;

  return (
    <Box width="100%" minHeight="100vh" bg="#222224" boxSizing="border-box" >
      <Menu 
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      
      <Box width="100%" height="auto">
        <img
          src="/assets/capaux.jpg"
          alt="Imagem da Capa de UXUI"
          style={{ width: '100%', height: '640px' }}
        />
      </Box>

      <Flex justifyContent="center" mt="26px" width="100%">
        <Box width="100%" maxWidth="1131px">
          <SimpleGrid columns={2} spacingX="230px" pb="40px">
            <VStack spacing="26px">
              <ContentCard
                image="/assets/uxanalise.svg"
                text="Pesquisa e Análise Aprofundada."
              />
              <ContentCard
                image="/assets/prototip.svg"
                text="Prototipagem e Testes Iterativos."
              />
              <ContentCard
                image="/assets/uxtest.svg"
                text="Avaliação de Usabilidade e Melhoria Contínua."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/assets/uxdesignuser.svg"
                text="Design Centrado no Usuário."
              />
              <ContentCard
                image="/assets/uxtreino.svg"
                text="Treinamento Especializado e Suporte Contínuo."
              />
              <ContentCard
                image="/assets/uxprototipe.svg"
                text="Interfaces intuitivas e agradáveis para fidelizar o usuário."
                isHighlight
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>

      
      <WebSection imageSrc="/assets/mobile.png" bgColor='#4E57A7' />

      
      <WhatsappButton />

      <div ref={contactRef}>
        <Contact  buttonColor='#4E57A7'/>
      </div>

      <Footer bgColor='#4E57A7'/>
    </Box>
  );
};

export default UXDevelopment;
