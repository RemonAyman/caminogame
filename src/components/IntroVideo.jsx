import React from 'react';
import { motion } from 'framer-motion';

const IntroVideo = ({ onFinish }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        maxWidth: '1200px',
        maxHeight: '675px', // 16:9 aspect ratio
        aspectRatio: '16/9'
      }}>
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dynfn8jeb&public_id=WhatsApp_Video_2026-02-06_at_18.24.42_jkucmi&autoplay=true"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          style={{ border: 'none' }}
        ></iframe>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onFinish}
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          padding: '12px 30px',
          fontSize: '1.2rem',
          backgroundColor: 'rgba(218, 165, 32, 0.8)', // Gold with opacity
          color: '#fff',
          border: '2px solid #fff',
          borderRadius: '50px',
          cursor: 'pointer',
          fontFamily: 'var(--font-arabic)',
          fontWeight: 'bold',
          zIndex: 10000,
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
        }}
      >
        تخطي الفيديو ➔
      </motion.button>
    </motion.div>
  );
};

export default IntroVideo;
