import React from 'react';
import { storiesOf } from '@storybook/react-native';

import PokemonInformation from "../../Components/PokemonInformation/PokemonInformation";

storiesOf('PokemonInformation', module)
    .add('default', () => (
        <PokemonInformation height={'height'} weight={'weight'}/>
    )
)