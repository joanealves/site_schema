import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DesignSection from '../components/DesignSection';
import WhatsappButton from '../components/WhatsappButton';

interface ContentCardProps {
  image: string;
  text: string;
  isHighlight?: boolean; 
}

const ContentCard: React.FC<ContentCardProps> = ({ image, text, isHighlight }) => {
  return (
    <Box width="100%" p={0} m={0}>
      <Box position="relative" width="60px" height="60px" mb="36px">
        <Image src={image} alt="logo ux" boxSize="60px" objectFit="cover" />
      </Box>
      <Text fontSize="sm" color={isHighlight ? '#25548A' : '#FFF'} textAlign="left">
        {text}
      </Text>
    </Box>
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
    <Box width="100%" minHeight="100vh" bg="#222224" boxSizing="border-box">
      <Menu 
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      
      {/* Imagem da capa */}
      <Box position="relative" width="100%" height="400px" boxSizing="border-box">
        <Image src="/assets/capaux.jpg" alt="Imagem da Capa UX" width="100%" height="400px" objectFit="cover" />
      </Box>

      {/* Conteúdo principal */}
      <Flex justifyContent="center" mt="26px" width="100%">
        <Box width="100%" maxWidth="1131px">
          <SimpleGrid columns={2} spacingX="230px">
            <VStack spacing="26px">
              <ContentCard
                image="/assets/erp/image1.jpg"
                text="Pesquisa e Análise Aprofundada."
              />
              <ContentCard
                image="/assets/erp/image2.jpg"
                text="Prototipagem e Testes Iterativos."
              />
              <ContentCard
                image="/assets/erp/image3.jpg"
                text="Avaliação de Usabilidade e Melhoria Contínua."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/assets/erp/image4.jpg"
                text="Design Centrado no Usuário."
              />
              <ContentCard
                image="/assets/erp/image5.jpg"
                text="Treinamento Especializado e Suporte Contínuo."
              />
              <ContentCard
                image="/assets/erp/image6.jpg"
                text="Interfaces intuitivas e agradáveis para fidelizar o usuário."
                isHighlight={true}
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>

      <DesignSection />
      <WhatsappButton />

      {/* Seção de contato */}
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </Box>
  );
};

export default UXDevelopment;
