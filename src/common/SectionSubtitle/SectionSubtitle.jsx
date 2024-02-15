import React from 'react';
import { SectionSubtitle } from './SectionSubtitle.styled';

export const Subtitle = ({marginTop, subtitle}) => (
  <SectionSubtitle  marginTop={marginTop}>
    {subtitle}
  </SectionSubtitle>
);
