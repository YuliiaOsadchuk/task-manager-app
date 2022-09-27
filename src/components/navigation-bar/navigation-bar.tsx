import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { ReactElement } from 'react';

import { FlexColumn } from '../../global.styles';
import {
  AllInboxOutlinedIconNavBar,
  DateRangeOutlinedIconNavBar,
  PriorityHighOutlinedIconNavBar,
  TodayOutlinedIconNavBar,
  BoxNavBar,
  BoxButton,
} from './navigation-bar.styles';

const NavigationBar = (): ReactElement => (
  <FlexColumn>
    <BoxButton>
      <Button variant='contained' startIcon={<AddOutlinedIcon />}>
        Add new project
      </Button>
    </BoxButton>
    <BoxNavBar>
      <nav aria-label='main mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AllInboxOutlinedIconNavBar />
              </ListItemIcon>
              <ListItemText primary='Inbox' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TodayOutlinedIconNavBar />
              </ListItemIcon>
              <ListItemText primary='Today' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DateRangeOutlinedIconNavBar />
              </ListItemIcon>
              <ListItemText primary='Next 7 days' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PriorityHighOutlinedIconNavBar />
              </ListItemIcon>
              <ListItemText primary='Important' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </BoxNavBar>
  </FlexColumn>
);

export default NavigationBar;
