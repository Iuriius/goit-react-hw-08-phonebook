import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: darkorchid;
  text-shadow: 1px 1px 1px pink;
  &:active {
    color: lightpink;
  }
`;
