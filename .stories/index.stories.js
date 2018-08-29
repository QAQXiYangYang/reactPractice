import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Home from '../src/components/test/login';

const name = "Linda";
storiesOf('storybook', module)
  .add('Home', () =>(
    <Home name={name}/>
  ));