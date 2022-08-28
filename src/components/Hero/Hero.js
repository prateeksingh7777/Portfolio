import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  //formting diff sections link title and paragraph for our wlecome page
  <Section row nopadding>
    <LeftSection >
      <SectionTitle main center>
        Hello There !<br/>
        I'm Prateek Kumar Singh
      </SectionTitle>
      <SectionText>
      I am learning enthusiast and hardworking person looking for new challenges in Frontend development or Machine learning engineer to develop my self and the company .
      </SectionText>
      <Button onClick={()=>window.location="https://drive.google.com/file/d/1UErYwz6sQ4TRnrfMsDgN6FWlgqi7d0b_/view?usp=sharing"}>My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;