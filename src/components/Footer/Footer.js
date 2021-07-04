import React from 'react';
import { AiFillGithub, AiFillInstagram, AiOutlineRocket } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+380674178249">+380674178249</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>E-Mail</LinkTitle>
        <LinkItem href="mailto:nikolayzalipykin@gmail.com">nikolayzalipykin@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>
          Innovating one projectat a time
        </Slogan>
      </CompanyContainer>
      {/* <SocialIcons href='https://github.com/salvation27' target="_blank">
        <AiFillGithub size = '3rem' />
      </SocialIcons>
      <SocialIcons href='https://github.com/salvation27' target="_blank">
        <AiOutlineRocket size = '3rem' />
      </SocialIcons>
      <SocialIcons href='https://github.com/salvation27' target="_blank">
        <AiFillInstagram size = '3rem' />
      </SocialIcons> */}
     </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
