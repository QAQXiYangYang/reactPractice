import React from 'react';

import { storiesOf } from '@storybook/react';

import Home from '../src/components/test/login';

const name = "red";
storiesOf('storybook', module)
  .add('Home', () =>(
    <Home name={name}/>
  ));
