import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 80px 0 80px 0;
  @media screen and (min-width: 1440px) {
    padding: 200px 0 200px 0;
  }
`;


export const Title = styled.h2`
  font-weight: 400;
  font-size: 25px;
  line-height: 1;
  letter-spacing: .02em;
  text-transform: uppercase;
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.3;
    letter-spacing: .05em;
    margin-bottom: 39px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
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
    :nth-child(1){
      align-self: flex-start;
    }
    :nth-child(3){
      align-self: flex-end;
    }
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
`;