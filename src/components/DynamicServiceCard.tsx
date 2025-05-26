import React, { Suspense } from 'react';
import { IconType } from 'react-icons';

const ServiceCard = React.lazy(() => import('./ServiceCard'));

interface DynamicServiceCardProps {
  color: string;
  title: string;
  Icon: IconType;
  href: string;
}

const DynamicServiceCard: React.FC<DynamicServiceCardProps> = (props) => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ServiceCard {...props} />
    </Suspense>
  );
};

export default DynamicServiceCard;
