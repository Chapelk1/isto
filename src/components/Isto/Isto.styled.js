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

export const Container = styled.div`
  display: flex;
  margin: 0;

  @media screen and (min-width: 1201px) {
    justify-content: center;
  }
`;
