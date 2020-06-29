import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header} from 'native-base'
import PokemonInfoCard from "../../Components/PokemonInfoCard/PokemonInfoCard";

const abilities= [
        {
            ability: {
                name: "overgrow",
                url: "https://pokeapi.co/api/v2/ability/65/"
            },
            is_hidden: false,
            slot: 1
        },
        {
            ability: {
                name: "chlorophyll",
                url: "https://pokeapi.co/api/v2/ability/34/"
            },
            is_hidden: true,
            slot: 3
        }
    ]

storiesOf('PokemonInfoCard', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            {createStory()}
        </Container>
    )).add('default', () => (
        <PokemonInfoCard
            height={'height'}
            weight={'weight'}
            abilities={abilities}
        />
    )
)