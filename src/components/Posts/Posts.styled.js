import styled from "@emotion/styled";

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;

  @media screen and (min-width: 1201px) {
    width: 1200px;
    margin: 0 auto;
  }
`;
export const Item = styled.li`
  width: 297px;
  height: 297px;
  overflow: hidden;
`;
export const Link = styled.a`
  :hover img {
    transform: scale(1.1);
  }
`;
