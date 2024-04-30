import styled from "@emotion/styled";

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
  }
  @media screen and (min-width: 1440px) {
    width: 1030px;
  }
`;

export const Photo = styled.img`
transition: all 250ms linear;
`;

export const Section = styled.section``;

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
`;
