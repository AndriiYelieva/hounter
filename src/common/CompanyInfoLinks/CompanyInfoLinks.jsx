import React from 'react';
import {
  InfoLink,
  InfoList,
  InfoListItem,
  InfoTitle,
  InfoWrapper,
} from './CompanyInfoLinks.styled';
import { companyLinks } from '../../data/companyInformation';

export const CompanyInfoLinks = () => (
  <InfoWrapper>
    {companyLinks.map(({
      id,
      links,
      title,
    }) => {
      return (
        <InfoList key={id}>
          <InfoTitle>{title}</InfoTitle>
          {links.map(({
            id,
            linkTitle,
            address
          }) => (
            <InfoListItem key={id}>
              <InfoLink href={address}>
                {linkTitle}
              </InfoLink>
            </InfoListItem>
          ))}
        </InfoList>
      );
    })}
  </InfoWrapper>
);
