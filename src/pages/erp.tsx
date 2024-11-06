import React from 'react';
import { Box, Flex, SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ERPSection from '../components/ErpSection';
import WhatsappButton from '../components/WhatsappButton';

interface ContentCardProps {
  image?: string;
  text: string;
  isHighlight?: boolean; 
}

const ContentCard: React.FC<ContentCardProps> = ({ image, text, isHighlight }) => {
  return (
    <Box p="16px" borderRadius="8px" bg="white">
      {image && <Image src={image} alt="logo erp" boxSize="60px" mb="36px" />}
      <Text
        fontSize="sm"
        color={isHighlight ? '#25548A' : 'gray.600'}
        fontWeight={isHighlight ? 'bold' : 'normal'}
        textAlign="left"
      >
        {text}
      </Text>
    </Box>
  );
};

const ERPDevelopment = () => {
  return (
    <Box width="100%" bg="white">
      <Menu />
      
      <Box width="100%" height="auto">
        <Image src="/assets/erpcapa.jpg" alt="Imagem da Capa ERP" width="100%" height="auto" />
      </Box>

      <Flex justifyContent="center" mt="26px">
        <Box width="calc(100% - 200px)" maxWidth="1131px">
          <SimpleGrid columns={2} spacingX="230px">
            <VStack spacing="26px">
              <ContentCard
                image="/assets/erp_talk.png"
                text="Análise e Consultoria Especializada."
              />
              <ContentCard
                image="/assets/erp_colaborate.png"
                text="Integração sem Complicações."
              />
              <ContentCard
                image="/assets/seguranca.jpg"
                text="Segurança e Conformidade."
              />
            </VStack>
            <VStack spacing="26px">
              <ContentCard
                image="/assets/erp_config.png"
                text="Personalização Abrangente."
              />
              <ContentCard
                image="/assets/erp_mensagem.png"
                text="Treinamento Especializado e Suporte Contínuo."
              />
              <ContentCard
                text="Potencialize seu Negócio com um ERP personalizado."
                isHighlight={true}
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>

      <ERPSection />
      <Contact />
      <WhatsappButton />
      <Footer />
    </Box>
  );
};

export default ERPDevelopment;
