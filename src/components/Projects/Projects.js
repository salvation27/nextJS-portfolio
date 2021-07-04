import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(item=>(
        <BlogCard key={item.id}>
           <Img src={item.image}></Img>
           <TitleContent>
            <HeaderThree title>
              {item.title}
            </HeaderThree>
            <Hr />
            <CardInfo>{item.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {item.tags.map((item,i)=>(
                  <Tag key={i}>{item}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={item.visit}>
                Page
              </ExternalLinks>
              <ExternalLinks href={item.source}>
                Code
              </ExternalLinks>
            </UtilityList>
           </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;