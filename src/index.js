import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
    </Fragment>
  );
}

