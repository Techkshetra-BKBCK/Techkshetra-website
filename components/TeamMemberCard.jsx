'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, IconButton, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imageKitLoader from '@/libs/imagekitloader';

const TeamMemberCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(true);
  };

  const handleCloseClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Card component={motion.div} whileHover={{ scale: 1.05 }} onClick={handleExpandClick} sx={{ borderRadius: 3 }}>
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Image
            loader={imageKitLoader}
            src={member.imagePath}
            alt={member.name}
            width={128}
            height={128}
            style={{ borderRadius: '50%', margin: 'auto' }}
          />
          <Typography variant="h6" mt={2}>
            {member.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {member.role}
          </Typography>
        </Box>
      </Card>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
          >
            <Card
              component={motion.div}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              sx={{
                position: 'relative',
                maxWidth: 400,
                width: '90%',
                p: 2,
                bgcolor: theme.palette.mode === 'light' ? 'white' : theme.palette.grey[700],
              }}
            >
              <IconButton
                onClick={handleCloseClick}
                sx={{ position: 'absolute', top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Image
                  loader={imageKitLoader}
                  src={member.imagePath}
                  alt={member.name}
                  width={128}
                  height={128}
                  style={{ borderRadius: '50%', margin: 'auto' }}
                />
                <Typography variant="h6" mt={2}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography paragraph mt={2}>{member.description}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  {member.instagram && (
                    <IconButton href={member.instagram} target="_blank" color="primary">
                      <InstagramIcon />
                    </IconButton>
                  )}
                  {member.linkedin && (
                    <IconButton href={member.linkedin} target="_blank" color="primary">
                      <LinkedInIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamMemberCard;
