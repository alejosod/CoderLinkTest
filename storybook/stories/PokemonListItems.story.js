import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header, Content} from 'native-base'
import PokemonListItem from "../../Components/PokemonListItem/PokemonListItem";

storiesOf('PokemonLisItems', module)
    .addDecorator(createStory => (
        <Container>
            <Header />
            <Content>
                {createStory()}
            </Content>
        </Container>
    ))
    .add('default', () => (
        <PokemonListItem name={'Pokemon Name'} url={'Test url'} />
    ))

