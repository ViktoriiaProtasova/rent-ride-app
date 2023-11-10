import styled from '@emotion/styled';
import { ButtonView } from 'components/Button/Button.styled';

export const CatalogItem = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-right: 9px;
`;

export const CatalogImageThumb = styled.div`
  width: 274px;
  height: 268px;
`;

export const CatalogTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CatalogImage = styled.img`
  object-fit: cover;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const CatalogTitle = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CatalogTitleItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CatalogTitleText = styled.p`
  color: var(--dark-light);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CatalogTitleAccent = styled.p`
  color: var(--primary-light);
`;

export const CatalogFeautersWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const CatalogFeatures = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
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
  stroke: rgba(52, 112, 255, 1);
  fill: transparent;
`;
// fill: rgba(52, 112, 255, 1);
