import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 1201px) {
    justify-content: center;
  }
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 451px;
  margin-right: 99px;
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: 20px;
  align-self: flex-start;
`;
export const PrimaryTitle = styled.p`
  font-weight: 400;
  font-size: 54px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: var(--primary-color);
  margin-bottom: 87px;
`;
export const List = styled.ul`
  max-width: 364px;
`;
export const Item = styled.li`
  margin-bottom: 68px;
`;
export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.03em;
  color: var(--primary-color);
  margin-bottom: 26px;
`;
export const Descr = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.59;
  letter-spacing: 0.02em;
  color: var(--primary-color);
`;
