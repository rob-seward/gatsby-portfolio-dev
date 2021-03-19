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
          <h1>5+ Years experience</h1>
          <p>Currently looking for a new position</p>
          <p>Understanding of business functions and strong knowledge of ecommerce and associated platforms</p>

          <Button as={AnchorLink} href="#contact">
            Message Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
