import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px;
  background: var(--primary-light);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: var(--white-light);
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  &.active {
    text-decoration: underline;
  }
`;
