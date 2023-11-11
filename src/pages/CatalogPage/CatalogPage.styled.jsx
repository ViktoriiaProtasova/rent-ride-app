import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 100px;
  display: flex;
  flex-direction: column;
  justyfy-content: center;
  align-items: center;
`;

export const AdvertsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin: 0;
  padding: 15px;
`;

export const LoadMore = styled.p`
  color: var(--primary-light);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
`;
