import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Timer } from './Timer';
import { useAppSelector } from '../hooks/redux';

export const InfoBar = () => {
  return (
    <Container>
      <Timer />
    </Container>
  );
};
