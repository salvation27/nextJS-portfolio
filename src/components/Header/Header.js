import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
// импорт иконок
import { AiFillGithub, AiFillInstagram, AiOutlineRocket } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
// стилизованные компоненты
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:'flex',alignItems:'center',color:'red'}}>
          <DiCssdeck size='3rem' /><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
           <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
           <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
           <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      {/* <SocialIcons href='https://github.com/salvation27' target="_blank">
        <AiFillGithub size = '3rem' />
      </SocialIcons>
      <SocialIcons href='https://github.com/salvation27' target="_blank">
        <AiOutlineRocket size = '3rem' />
      </SocialIcons>
      <SocialIcons href='https://github.com/salvation27' target="_blank">
        <AiFillInstagram size = '3rem' />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;


const Span = styled.span`
color:#fff;
`
