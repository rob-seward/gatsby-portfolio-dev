import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I've been working in agency's and digital team's for over 6 years with last 2 years focused on JAMstack as
            an editor and now as a developer.
          </p>
          <Button as={AnchorLink} href="#contact">
            Message Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
