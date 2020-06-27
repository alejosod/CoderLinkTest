import React, {useEffect} from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Button } from 'native-base';

const testingEnv = process.env.EXPO_TEST || false

import StoryApp from './storybook'
import {useFontLoading} from "./Hooks";
import useGetPokemonList from "./Hooks/useGetPokemonList";

function App() {

  const [ fontLoading ] = useFontLoading();
  const [pokemonList, getPokemonList] = useGetPokemonList(10, 0);

  useEffect(() => { getPokemonList() }, [])

  return fontLoading || pokemonList.loading ? <AppLoading /> : (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => {getPokemonList(pokemonList.data.next)}}>
          <Text>More Pokemons</Text>
      </Button>
    </Container>
  );
}

export default testingEnv ? StoryApp : App

