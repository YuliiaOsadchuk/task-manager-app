import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

import { BoxButton, HeaderText, DateText, TextBox } from './header.styles';

const Header = (): ReactElement => {
  const getDate = (): string => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <>
      <TextBox>
        <HeaderText>Today</HeaderText>
        <DateText>{getDate()}</DateText>
      </TextBox>
      <BoxButton>
        <Button startIcon={<AddOutlinedIcon />}>Add new project</Button>
      </BoxButton>
    </>
  );
};

export default Header;
