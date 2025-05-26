import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import DynamicServiceCard from './DynamicServiceCard';
import { BsCodeSquare } from 'react-icons/bs';
import { FiDatabase } from 'react-icons/fi';
import { SiCanvas } from 'react-icons/si';

const ServicesSection = () => {
  return (
    <SimpleGrid columns={3} spacing={0} width="100%" height="345px">
      <DynamicServiceCard color="#EF3E66" title="Desenvolvimento de Sites" Icon={BsCodeSquare} href="/desenvolvimento" />
      <DynamicServiceCard color="#25548A" title="ERP - Gestão" Icon={FiDatabase} href="/erp" />
      <DynamicServiceCard color="#4E57A7" title="UX/UI Design" Icon={SiCanvas} href="/ux-ui-design" />
    </SimpleGrid>
  );
};

export default ServicesSection;
