import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 0rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: #707070;
    @media (max-width: 1200px) {
      gap: 1rem;
    }
  }

  @media (max-width: 370px) {
    position: relative;
    bottom: 30px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;

    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 370px) {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
    }

    @media (max-width: 850px) {
      padding-left: 3rem;
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
      margin-left: 3rem;
      padding-left: 2rem;

      margin-bottom: 0;
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
    @media (max-width: 1000px) {
      padding-left: 3rem;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 850px) {
      padding-left: 4rem;
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
      padding-left: 3rem;
    }

    @media (max-width: 1000px) {
      padding-left: 6rem;
    }
  }

  p {
    margin-top: 20pt;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
