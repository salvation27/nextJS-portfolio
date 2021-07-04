import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
     <SectionTitle main center>
        Welcome To <br /> My Personal Portfolio
     </SectionTitle>
     <SectionText>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi, odio eos quisquam quibusdam ipsam accusantium nisi quod quasi deserunt, illo reprehenderit perspiciatis dolore eaque aspernatur nemo numquam, enim cupiditate.
     </SectionText>
     <Button
     onClick={ ()=> window.location = 'https://google.com'}
     >More</Button>
    </LeftSection>
  </Section>
);

export default Hero;