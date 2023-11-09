import styled from '@emotion/styled';

export const ButtonView = styled.button`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 44px;
  border-radius: 12px;
  border-style: none;
  outline: none;
  cursor: pointer;
  background-color: var(--accent-light);
  color: var(--white-light);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  transition: background-color
    var(--animation-duration, --animation-timing-function);

  &:hover {
    background-color: var(--primary-light);
  }
`;
