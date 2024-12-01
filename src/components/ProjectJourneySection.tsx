import { Grid } from '@chakra-ui/react';

import { FaLightbulb, FaHandPeace } from "react-icons/fa"; 
import { BsCodeSlash } from "react-icons/bs"; 
import { HiAdjustments } from "react-icons/hi"; 

import ProjectJourneyCards from './ProjectJourneyCards';

const ProjectJourneySection = () => {
  return (
    <Grid gap="36px" templateColumns="1fr 1fr" p="24px 16px" bg="#222224">
      <ProjectJourneyCards 
        icon={FaLightbulb} 
        color="#EF3E66" 
        info="Idealizar - Momento de levantar requisitos, elencá-los e por fim extrair valor por entregas alinhando com as suas expectativas."
      />
      <ProjectJourneyCards 
        icon={BsCodeSlash} 
        color="#25548A" 
        info="Dividindo as entregas nas chamadas Sprints, iniciamos os trabalhos e a cada ciclo você pode acompanhar e pontuar. Obrigatório para alcançarmos a perfeição."
      />
      <ProjectJourneyCards 
        icon={HiAdjustments} 
        color="#4E57A7" 
        info="Depois de aprovado daremos inicio a melhoria contínua da entrega a fim de deixá-la pronta para o lançamento. É um dos pontos mais importantes para a agilidade."
      />
      <ProjectJourneyCards 
        icon={FaHandPeace} 
        color="#7299e7" 
        info="Realizamos uma revisão geral do projeto, buscando melhorias importantes para proporcionar uma excelente experiência e agregar valor ao usuário final."
      />
    </Grid>
  );
};

export default ProjectJourneySection;
