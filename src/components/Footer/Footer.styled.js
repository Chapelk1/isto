import styled from "@emotion/styled";

export const Ftr = styled.footer`
  background: var(--primary-color);
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 80px 10px 40px 10px;
  @media screen and (min-width: 768px) {
    padding: 80px 40px 89px 40px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 80px 15px 89px 15px;
  }
`;

export const TopWrap = styled.div`
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 225px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: normal;
  }
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 54px;
  line-height: 1.3;
  letter-spacing: 0.01em;
  color: var(--tertiary-color);
  margin-bottom: 60px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    max-width: 329px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 171px;
  }
`;
export const TopList = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const TopListItem = styled.div`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 185px;
    }
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
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const Accent = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--secondary-color);
  margin-top: 60px;
  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;
export const ProvisionsWrap = styled.div`
  
`;
export const ProvisionsList = styled.ul`
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 39px; 
  }
`;
export const ProvisionsItem = styled.li`
  :not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 36px;
    }
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
