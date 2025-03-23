'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/joy';
import Image from 'next/image';
import AspectRatio from '@mui/joy/AspectRatio';

export default function FlipCard({cardTitle, imagePath, imageAlt, description}) {
	const [isFlipped, setIsFlipped] = useState(false);

  const toggleComponent = () => {
		setIsFlipped(!isFlipped);
	};

  const containerStyle = {
    perspective: '1000px',
    width: '375px',
    height: '425px',
  };

  const flipStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'none',
  };

  const frontBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    boxShadow: isFlipped
      ? '0 15px 8px rgb(6, 55, 118, 0.25)'
      : '0 4px 8px rgb(6, 55, 118, 0.25)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const backStyle = {
    ...frontBackStyle,
    transform: 'rotateY(180deg)',
  };

  return (
    <Box
      style={containerStyle}
      onClick={toggleComponent}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <Box sx={flipStyle}>
        <Box sx={frontBackStyle}>
          <AspectRatio ratio='8/7'>
            <Image fill src={imagePath} alt={imageAlt}/>
          </AspectRatio>
          <Typography
            mt={3}
            className='graphite'
            level='body-lg'
            textAlign='center'
          >
            {cardTitle}
          </Typography>
        </Box>
        <Box sx={backStyle}>
          <Box
            sx={{
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex', 
                justifyContent: 'center',
              }}
            >
              <Typography className='graphite' level='body' textAlign='center' lineHeight='1.2'>{cardTitle}</Typography>
            </Box>
            <Box 
              sx={{
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                transform: 'scale(0.9)',
                marginTop: 'auto',
              }}
            >
              {description}
            </Box>        
            <Box
              sx={{
                marginTop: 'auto',
                display: 'flex', 
                justifyContent: 'center',
              }}
            >
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
