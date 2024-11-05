import { Box } from '@chakra-ui/react';

const Hero: React.FC = () => {
  return (
    <Box
      height="476px"
      width="100%"
      bgImage="url('/assets/capa.jpg')" 
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center 70%"
    >
    </Box>
  );
};

export default Hero;
