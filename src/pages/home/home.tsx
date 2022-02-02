import React, { ReactElement } from 'react';

import Header from '../../components/header/header';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import NoTasks from '../../components/no-tasks/no-tasks';
import { HomeBox } from './home.styles';
import { FlexRow, FlexColumn } from '../../global.styles';

const Home = (): ReactElement => (
  <FlexRow>
    <NavigationBar />
    <HomeBox>
      <Header />
      <NoTasks />
    </HomeBox>
  </FlexRow>
);

export default Home;
