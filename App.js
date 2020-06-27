import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';

const testingEnv = process.env.EXPO_TEST || false

import StoryApp from './storybook'
import {useFontLoading} from "./Hooks";

function App() {

  const [ fontLoading ] = useFontLoading();

  return fontLoading ? <AppLoading /> : (
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
      </Container>
  );
}

export default testingEnv ? StoryApp : App

