import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-bottom: 91px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  margin-bottom: 64px;
  max-width: 400px;
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
  overflow: none;
  padding: 15px 30px;
  align-self: flex-start;
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
export const Container = styled.div``;
