import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Thanks for your interest,</h1>
          <h4>I'm Ecommerce specalist focusing on JAMStack technologies</h4>
          <Button as={AnchorLink} href="#contact">
            Message Me
          </Button>
          <p>
            Speed mean's higher converstion rates and better customer experience, starting in May Google will be ranking
            faster sites higher.
          </p>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Site speed first" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
