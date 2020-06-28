import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header, Content} from 'native-base'
import PokemonOverview from "../../Components/PokemonOverview/PokemonOverview";

storiesOf('PokemonOverview', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            <Content>
                {createStory()}
            </Content>
        </Container>
    ))
    .add('default', () => (
        <PokemonOverview
            name={'Pokemon Name'}
            number={'1'}
            imgUrl={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'} />
    ))

