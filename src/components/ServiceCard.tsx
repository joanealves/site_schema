// ServiceCard.tsx
import React from 'react';
import { Box, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  color: string;
  title: string;
  Icon: IconType;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ color, title, Icon, href }) => {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <Box
      width="100%"
      minHeight="200px" // Altura mínima para garantir visibilidade do conteúdo
      bg={`${color}99`}
      borderRadius="6px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="20px"
      transition="transform 0.4s ease, box-shadow 0.4s ease"
      _hover={{
        transform: "translateY(-8px) rotate(0.5deg) scale(1.02)",
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)"
      }}
      textAlign="center"
    >
      <Icon size={isMobile ? "40px" : "60px"} color="white" />
      <Text fontSize={isMobile ? "14px" : "lg"} color="white" fontWeight="bold" mt="10px">
        {title}
      </Text>
      {href && (
        <Button
          mt="10px"
          variant="outline"
          borderColor="white !important"
          color="white"
          width="119px"
          height="40px"
          _hover={{
            bg: "transparent",
            borderColor: 'white !important'
          }}
          border="2px solid white !important"
          borderRadius="6px"
          bg="transparent"
          cursor="pointer"
          onClick={handleClick}
        >
          Saiba Mais
        </Button>
      )}
    </Box>
  );
};

export default ServiceCard;