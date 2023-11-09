import styled from '@emotion/styled';
import { ButtonView } from 'components/Button/Button.styled';

export const CatalogItem = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  flex-shrink: 0;
`;

export const CatalogImage = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const CatalogTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 87px;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CatalogTitleAccent = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 87px;
  color: var(--primary-light);
`;

export const CatalogFeatures = styled.ul`
  display: flex;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const CardButton = styled(ButtonView)`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: var(--primary-light);

  &:hover {
    background-color: var(--accent-light);
  }
`;
export const CardFavoriteIcon = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  stroke: rgba(255, 255, 255, 0.8);
  fill: transparent;
`;
// fill: rgba(52, 112, 255, 1);
