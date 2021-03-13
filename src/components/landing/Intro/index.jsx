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
          <h4>I'm an Ecommerce specalist focusd on JAMStack technologies</h4>
          <Button as={AnchorLink} href="#contact">
            Message Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Site speed first" />
        </Thumbnail>
        <h3>
          I've been working on Global Ecommerce platform built on JAMstack. It’s given me a great overview and deep
          knowledge of the benefits and shortcomings in a real world FMCG B2C environment.
        </h3>
        <p>
          <p>
            Here’s some of my side projects I’ve built when I've trying to figure things out, please feel free to take a
            look.
          </p>
        </p>
      </IntroWrapper>
    </Wrapper>
  );
};
