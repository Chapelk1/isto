import styled from "@emotion/styled";

export const Section = styled.section`
  background: var(--tertiary-color);
  padding: 80px 0 80px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  
`;


export const Frame = styled.iframe`
  width: 100%;
  height: 400px;
  @media screen and (min-width: 768px) {
    height: 556px;
  }
`;