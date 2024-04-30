import styled from "@emotion/styled";


export const Section = styled.section`
  @media screen and (min-width: 320px) {
    padding: 40px 0 80px 0;
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
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 724px;
    padding: 0 12px;
  }
  @media screen and (min-width: 1024px) {
    width: 880px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    gap: 60px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;
export const Wrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    width: 100%;
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
`;
export const Accent = styled.span`
  font-weight: 400;
  font-size: 54px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: var(--primary-color);
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    align-self: center;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 91px;
    align-self: flex-start;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  margin-bottom: 64px;
  max-width: 460px;
  @media screen and (min-width: 320px) {
    align-self: center;
  }
  @media screen and (min-width: 1024px) {
    align-self: flex-start;
    max-width: 400px;
  }
`;


export const Photo = styled.img`
  display: none;
  @media screen and (min-width: 1024px) {
    display: unset;
    width: 400px;
    height: 400px;
  }
  @media screen and (min-width: 1440px) {
    display: unset;
    width: 600px;
    height: 600px;
    margin-right: 50px;
  }
`;

export const Btn = styled.button`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--primary-color);
  // background: var(--primary-color);
  background: transparent;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid var(--primary-color);
  transition: all 300ms linear;
  overflow: hidden;
  position: relative;
  align-self: flex-end;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    transform: translate(-101%);
    transition: transform var(--transition-fall);
  }

  :hover::before {
    transform: translate(0%);
  }
  :hover {
    color: var(--secondary-color);
  }
  @media screen and (min-width: 1024px) {
    align-self: flex-start;
  }
`;