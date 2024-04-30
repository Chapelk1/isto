import styled from "@emotion/styled";


export const Section = styled.section`
  padding: 60px 0 60px 0;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding: 100px 0 160px 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 240px 0 200px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 335px 0 227px 0;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1440px) {
    width: 539px;
    display: flex;
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  font-weight: 400;
  font-size: 34px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: var(--primary-color);
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 54px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 539px;
  }
`;
export const WrapText = styled.div`
  @media screen and (min-width: 1440px) {
    align-self: end;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  margin-bottom: 39px;
  max-width: 357px;
  
`;
export const Photo = styled.img`
  display: none;
  @media screen and (min-width: 1024px) {
    display: unset;
    width: 400px;
    height: auto;
    position: absolute;
    left: 512px;
    top: -58px;
  }
  @media screen and (min-width: 1440px) {
    width: 700px;
    height: 799px;
    left: 556px;
    top: -308px;
  }
`;