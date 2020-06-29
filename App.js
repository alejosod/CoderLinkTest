import React, {useEffect} from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StoryApp from './storybook'
import {useFontLoading} from "./Hooks";
import useGetPokemonList from "./Hooks/useGetPokemonList";
import PokemonList from "./Components/PokemonList/PokemonList";
import PokemonsProvider from "./Components/PokemonProvider/PokemonProvider";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";

const Stack = createStackNavigator();
const testingEnv = process.env.EXPO_TEST || false

function App() {

  const [ fontLoading ] = useFontLoading();
  const [pokemonList, getPokemonList] = useGetPokemonList(200, 0);

  useEffect(() => { getPokemonList() }, [])

  return fontLoading || pokemonList.loading ? <AppLoading /> : (
    <Container>
      <PokemonsProvider pokemonList={pokemonList.data}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Pokemon List" component={PokemonList} />
            <Stack.Screen name="Pokemon-Details" component={PokemonDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </PokemonsProvider>
    </Container>
  );
}

export default testingEnv ? StoryApp : App

