import React, { ReactElement } from 'react';

import Header from '../../components/header/header';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import NoTasks from '../../components/no-tasks/no-tasks';
import { FlexRow } from '../../global.styles';
import { HomeBox } from './home.styles';

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
