import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  width: 320px;
  height: 74px;
  margin-top: 8px;
  align-items: center;
  flex-shrink: 0;
`;

export const InputLeft = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 85px 14px 24px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: var(--transparent-light);
  color: var(--dark-light);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const InputRight = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 115px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background-color: var(--transparent-light);
  color: var(--dark-light);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;
