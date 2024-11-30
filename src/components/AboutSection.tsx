import { 
  Box, 
  Text, 
  Flex, 
  Image,
 } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <Flex
      bg="#222224"
      width="100%"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      height={{ base: 'auto', md: '244px' }}
      p={{ base: '16px', md: '40px' }}
      pb={{ base: '0', md: '40px' }}
    >
      {/* Texto à esquerda com margem para alinhar */}
      <Box
        color="white"
        maxWidth={{ base: '100%', md: '50%' }}
        // textAlign={{ base: 'center', md: 'left' }}
        mx={{ base: 'auto', md: '0' }}
      >
        <Text 
          fontSize={{ base: '20px', sm: '22px', md: '24px' }} 
          fontWeight="bold" 
          mt={{ base: '0', md: '32px' }} 
          mb={{ base: '16px', md: '35px' }}
        >
          Quem Somos
        </Text>
        <Text 
          fontSize={{ base: '14px', sm: '15px', md: '16px' }} 
          // textAlign={{ base: 'center', md: 'justify' }} 
          mb={{ base: '32px', md: '60px' }}
        >
          A Schema é uma casa de software formada por profissionais diversificados e multidisciplinares, trazendo um amplo conhecimento em diversas áreas.
          Diversos projetos entregues.
          Do design ao desenvolvimento, cuidamos de cada detalhe.
        </Text>
      </Box>

      {/* Imagem à direita com margem simétrica */}
      <Box
        position="relative"
        width={{ base: '150px', sm: '195px', md: '200px' }}
        height={{ base: '150px', sm: '193px', md: '200px' }}
        mr={{ base: '0', sm: '20px', md: '110px' }}
        mb="-1px"
        mx="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/assets/equipe.png"
          alt="Equipe da Schema"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default AboutSection;