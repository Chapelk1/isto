import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
  
  }
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1024px) {
    
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 451px;
    margin-right: 99px;
  }
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
  font-weight: 500;
  font-size: 34px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: var(--primary-color);
  margin-bottom: 60px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 54px;
    font-weight: 400;
    margin-bottom: 87px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 364px;
  }
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 68px;
    }
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.03em;
  color: var(--primary-color);
  margin-bottom: 26px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    font-weight: 400;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Descr = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.59;
  letter-spacing: 0.02em;
  color: var(--primary-color);
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Photo = styled.img`
  display: none;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    display: unset;
    width: 550px;
    height: 812px;
  }
`;