import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "5+", text: 'Open Source Projects'},
  { number: "4th", text: 'AIR Rank in HACK SVIT 2022' },
  { number: 3, text: 'Star coder on CodeChef'},
  { number: "3868th", text: 'Global Rank in Google Kickstart 2021' },
  { number: "1st", text: 'Rank in Atheneum-Product innovation challenge'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
