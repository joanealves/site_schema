import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const whatsappNumber = '5531971670627'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        padding: '15px',  
        borderRadius: '50%',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',  
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',  
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';  
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.8)';  
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';  
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.6)';  
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
