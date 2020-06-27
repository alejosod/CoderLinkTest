import React, {useEffect} from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';

const testingEnv = process.env.EXPO_TEST || true

import StoryApp from './storybook'
import {useFontLoading} from "./Hooks";
import useGetPokemonList from "./Hooks/useGetPokemonList";
import PokemonListItem from "./Components/PokemonListItem/PokemonListItem";

function App() {

  const [ fontLoading ] = useFontLoading();
  const [pokemonList, getPokemonList] = useGetPokemonList(10, 0);

  useEffect(() => { getPokemonList() }, [])

  return fontLoading || pokemonList.loading ? <AppLoading /> : (
    <Container>
        <PokemonListItem name={'Pokemon Name'} url={'Test url'} />
    </Container>
  );
}

export default testingEnv ? StoryApp : App

