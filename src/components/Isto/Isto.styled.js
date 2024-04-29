import styled from "@emotion/styled";


export const Section = styled.section`
  @media screen and (min-width: 320px) {
    padding: 40px 0 80px 0;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    padding: 50px 0 77px 0;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
    display: flex;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: 70px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Accent = styled.span`
  font-weight: 400;
  font-size: 54px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: var(--primary-color);
  margin-bottom: 91px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  margin-bottom: 64px;
  max-width: 400px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;


export const Photo = styled.img`
  display: none;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    margin-right: 50px;
    display: unset;
    width: 600px;
    height: 600px;
    marginright: 50px;
  }
`;