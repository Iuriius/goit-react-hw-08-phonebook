import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Username, ButtonAuth } from './UserMenu.styled.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <ButtonAuth type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonAuth>
    </Wrapper>
  );
};
