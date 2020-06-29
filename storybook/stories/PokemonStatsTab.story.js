import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header, Content} from 'native-base'
import PokemonStatsTab from "../../Components/PokemonStatsTab/PokemonStatsTab";

const pokemonStats = [
    {
        base_stat:45,
        stat: {
            name: 'Hp'
        }
    },
    {
        base_stat: 49,
        stat: {
            name: 'attack'
        }
    },
    {
        base_stat: 65,
        stat: {
            name: 'special-attack'
        }
    },
    {
        base_stat: 90,
        stat: {
            name: 'super-long-text-testing-wrap'
        }
    },
]

storiesOf('PokemonStatsTab', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            <Content>
                {createStory()}
            </Content>
        </Container>
    ))
    .add('default', () => (
        <PokemonStatsTab stats={pokemonStats} />

    ))

