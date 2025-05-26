import { Box, Text, Flex, Image } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <Flex
      bg="#222224"
      width="100%"
      height="244px"
      paddingX="20px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box color="white" ml="110px" maxWidth="50%">
        <Text fontSize="24px" fontWeight="bold" mt="32px" mb="35px">
          Quem Somos
        </Text>
        <Text fontSize="16px" textAlign="justify" lineHeight="tall" mb="60px">
          A Schema é uma casa de software formada por profissionais diversificados e multidisciplinares, trazendo um amplo conhecimento em diversas áreas.
          Diversos projetos entregues.
          Do design ao desenvolvimento, cuidamos de cada detalhe.
        </Text>
      </Box>

      <Box position="relative" width="200px" height="200px" mr="110px">
        <Image
          src="/assets/equipe.png"
          alt="Equipe da Schema"
          width="200px"
          height="200px"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default AboutSection;
