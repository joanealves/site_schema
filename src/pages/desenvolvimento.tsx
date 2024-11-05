import React from 'react';
import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import WebSection from '../components/WebSection';
import WhatsappButton from '../components/WhatsappButton';
import Contact from '../components/Contact';

const ContentCard: React.FC<{ image: string; title: string; text: string; isHighlight?: boolean }> = ({
  image,
  title,
  text,
  isHighlight,
}) => {
  return (
    <Box>
      <img
        src={image}
        alt={title}
        style={{ width: '60px', height: '60px', marginBottom: '36px' }}
      />
      <Text fontSize="sm" color={isHighlight ? '#E75475' : '#FFF'} textAlign="left">
        {text}
      </Text>
    </Box>
  );
};

const WebDevelopment = () => {
  return (
    <Box width="100%" bg="#222224" minHeight="100vh">
      {/* Menu */}
      <Menu />

      {/* Imagem da capa */}
      <Box width="100%" height="auto">
        <img
          src="/src/assets/capa.jpg" 
          alt="Imagem da Capa"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>

      {/* Conteúdo da página */}
      <Flex justifyContent="center" mt="26px">
        <Box width="calc(100% - 200px)" maxWidth="1131px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={{ base: '20px', md: '230px' }} spacingY="26px">
            <VStack spacing="26px">
              <ContentCard
                image="/assets/image1.jpg"
                title="Design Distinto e Personalizado"
                text="Cada site e landing page que criamos é único e alinhado com a identidade visual da sua marca."
              />
              <ContentCard
                image="/assets/image2.jpg"
                title="Responsividade em Todos os Dispositivos"
                text="Seu site ou landing page será perfeitamente funcional em desktops, tablets e smartphones."
              />
              <ContentCard
                image="/assets/image3.jpg"
                title="Manutenção e Suporte Contínuos"
                text="Fornecemos suporte técnico contínuo e atualizações regulares."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/assets/image4.jpg"
                title="Foco na Conversão e Usabilidade"
                text="Priorizamos a usabilidade e a experiência do usuário."
              />
              <ContentCard
                image="/assets/image5.jpg"
                title="Integração com Ferramentas Essenciais"
                text="Integramos funcionalidades essenciais como formulários de contato."
              />
              <ContentCard
                image="/assets/image6.jpg"
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
