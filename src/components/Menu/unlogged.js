import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { StyledLink } from './unlogged.styled';

export const Unlogged = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <StyledLink to="/" end>
        <Tab label="Sign Up" />
      </StyledLink>
      <StyledLink to="login">
        <Tab label="Sign In" />
      </StyledLink>
    </Box>
  );
};
