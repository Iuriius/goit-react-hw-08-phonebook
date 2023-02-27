import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: dodgerblue;
    }
  }
`;
