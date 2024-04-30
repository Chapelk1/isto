import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 80px 0 2px 0;
  @media screen and (min-width: 1440px) {
    padding: 169px 0 3px 0;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 27px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 29px;
`;
export const List = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
    gap: 4px;
  }
`;
export const Item = styled.li`
  @media screen and (min-width: 320px) {
    width: 297px;
    height: 297px;
    overflow: hidden;
  }
  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (min-width: 1440px) {
    width: 297px;
    height: 297px;
  }
`;
export const Link = styled.a`
  :hover img {
    transform: scale(1.1);
  }
`;
