import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {Container, Header} from 'native-base'
import PokemonInfoCard from "../../Components/PokemonInfoCard/PokemonInfoCard";

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
        />
    )
)