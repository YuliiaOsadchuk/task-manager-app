import { Button } from '@mui/material';
import styled from 'styled-components';

export const FlexColumn = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
});

export const FlexCenter = styled(FlexColumn)({
  alignItems: 'center',
});

export const SignInButton = styled(Button)({
  marginTop: '20px',
  marginBottom: '10px',
});
