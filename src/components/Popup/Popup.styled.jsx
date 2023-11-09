import styled from '@emotion/styled';
import { ButtonView } from 'components/Button/Button.styled';

export const PopupView = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--white-light);
  padding: 40px;
`;

export const PopupImage = styled(ButtonView)`
  width: 461px;
  height: 248px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const PopupDescription = styled.p`
  width: 461px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const PopupConditionWrapper = styled.div`
  display: flex;
  width: 461px;
  height: 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  color: rgba(54, 53, 53, 1);
`;

export const PopupConditionItem = styled.li`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const PopupSubtitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const PopupButton = styled(ButtonView)`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  background: var(--primary-light);

  &:hover {
    background-color: var(--accent-light);
  }
`;

export const PopupCloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke: rgba(18, 20, 23, 1);
  fill: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;
