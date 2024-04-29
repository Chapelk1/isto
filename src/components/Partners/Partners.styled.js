import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 80px 0 80px 0;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    padding: 200px 0 200px 0;
  }
`;


export const Title = styled.h2`
  font-weight: 500;
  font-size: 35px;
  line-height: 1;
  letter-spacing: .1em;
  text-transform: uppercase;
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 39px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.05em;
  }
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 90px;
    margin: 0 auto;
  }
`;
export const Photo = styled.img`
  height: 55px;
  width: auto;
  :not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;