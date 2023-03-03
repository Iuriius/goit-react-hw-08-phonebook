import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const ButtonAuth = styled.button`
  margin-right: 1rem;
  color: snow;
  text-shadow: darkslateblue 1px 1px 1px;
  line-height: 1.5rem;
  background: pink;
  border: none;
  border-radius: 7px;
  box-shadow: rebeccapurple 2px 2px 2px;
  cursor: pointer;
  transition: all 150ms ease 0s;

  &:hover,
  &:focus {
    background: blueviolet;
    box-shadow: 2px 5px 5px darkorchid;
  }
`;
