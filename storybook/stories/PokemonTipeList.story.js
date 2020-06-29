import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {Container, Header, Content} from 'native-base'

import PokemonTypeComponent from "../../Components/PokemonTypeComponent";

const pokemonTypes = [
    {
        type: {
            name: 'Grass'
        }
    },
    {
        type: {
            name: 'Fire'
        }
    },
    {
        type: {
            name: 'Meta'
        }
    },
    {
        type: {
            name: 'Water'
        }
    },

]

storiesOf('pokemonTypeList', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            <Content>
                {createStory()}
            </Content>
        </Container>
    ))
    .add('default', () => (
        <PokemonTypeComponent types={pokemonTypes} />
    ))

