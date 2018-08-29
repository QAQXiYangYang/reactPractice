import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Welcome from './welcome';

const name = "Linda";
storiesOf('storybook', module)
  .add('Welcome', () =>(
    <Welcome name={name}/>
  ));