import React from 'react';
import { storiesOf } from '@storybook/react-native';
import PokemonAbilities from "../../Components/pokemonAbiilitiies/PokemonAbiliities";

const abilities = [
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

storiesOf('PokemonAbillities', module)
    .add('default', () => (
            <PokemonAbilities abilities={abilities} />
        )
    )