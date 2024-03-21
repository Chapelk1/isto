import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1030px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Photo = styled.img`
transition: all 250ms linear;`;

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
