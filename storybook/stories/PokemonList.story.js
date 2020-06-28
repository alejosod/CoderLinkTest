import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header} from 'native-base'
import PokemonList from "../../Components/PokemonList/PokemonList";

const PokemonListMock = [
    {
        url: '',
        name: 'pokemon Name'
    },
    {
        url: '',
        name: 'pokemon Name'
    },
    {
        url: '',
        name: 'pokemon Name'
    },
    {
        url: '',
        name: 'pokemon Name'
    },
]

storiesOf('PokemonList', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            {createStory()}
        </Container>
    )).add('default', () => (
        <PokemonList
            pokemonList={PokemonListMock}
            navigation={{navigate: (url) => alert(url)}}
        />
        )
)