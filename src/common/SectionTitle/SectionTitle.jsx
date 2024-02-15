import React from 'react';
import { SectionTitle } from './SectionTitle.styled';

export const Title = ({center, title}) => (
  <SectionTitle center={center}>
    {title}
  </SectionTitle>
);
