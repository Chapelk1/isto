import styled from "@emotion/styled";

export const Ftr = styled.footer`
  background: var(--primary-color);
`;
export const TopWrap = styled.div`
  display: flex;
  margin-bottom: 225px;
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 54px;
  line-height: 1.3;
  letter-spacing: 0.01em;
  color: var(--tertiary-color);
  max-width: 329px;
  margin-right: 171px;
`;
export const TopList = styled.ul`
  display: flex;
`;
export const TopListItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-right: 185px;
  }
`;
export const TopSubTitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 23px;
`;
export const TopLink = styled.a`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--secondary-color);
  margin-bottom: 10px;
  transition: all 250ms linear;
  :hover {
    color: var(--accent-color);
  }
`;

export const BottWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Accent = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--secondary-color);
`;
export const ProvisionsWrap = styled.div``;
export const ProvisionsList = styled.ul`
  display: flex;
  margin-bottom: 39px;
`;
export const ProvisionsItem = styled.li`
  :not(:last-child) {
    margin-right: 36px;
  }
`;
export const ProvisionsLink = styled.a`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--secondary-color);
  cursor: pointer;
  transition: all 250ms linear;
  & span {
    display: block;
  }
  :hover {
    color: var(--accent-color);
  }
`;
export const Note = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: var(--tertiary-color);
  max-width: 463px;
`;
