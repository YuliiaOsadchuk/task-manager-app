import React, { ReactElement } from 'react';

import bicycleImg from '../../assets/bicycle-1.png';
import { BoxNoTasks, BoxImage, Img } from './no-tasks.styles';

const NoTasks = (): ReactElement => (
  <BoxNoTasks>
    <BoxImage>
      <Img src={bicycleImg} alt='bicycle' />
    </BoxImage>
    <h3>You are all done for the week!</h3>
    <h6>Enjoy your night.</h6>
  </BoxNoTasks>
);

export default NoTasks;
