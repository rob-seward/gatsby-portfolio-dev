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
          <h4>I'm an Ecommerce specalist focusing on JAMStack technologies</h4>
          <Button as={AnchorLink} href="#contact">
            Message Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Site speed first" />
        </Thumbnail>
        <p>
          Speed mean's higher converstion rates and better customer experience, starting in May Google will be ranking
          faster sites higher.
        </p>
        <p>
          I'm baby 3 wolf moon gluten-free kinfolk hella subway tile butcher. Portland migas blog leggings helvetica
          cronut copper mug. Celiac kitsch everyday carry direct trade cold-pressed lomo, health goth williamsburg
          chicharrones austin. Coloring book pop-up distillery bitters, tumblr drinking vinegar 90's mustache tumeric
          tattooed jianbing fixie.
        </p>
      </IntroWrapper>
    </Wrapper>
  );
};
