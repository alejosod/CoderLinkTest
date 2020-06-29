import React from 'react';
import { storiesOf } from '@storybook/react-native';

import PokemonDetails from "../../Components/PokemonDetails/PokemonDetails";

const pokemon = {
    weight: 69,
    height: 7,
    name: "bulbasaur",
    id: 1,
    abilities: [
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
    ],
    stats: [
        {
            base_stat: 45,
            effort: 0,
            stat: {
                name: "hp",
                url: "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            base_stat: 49,
            effort: 0,
            stat: {
                name: "attack",
                url: "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            base_stat: 49,
            effort: 0,
            stat: {
                name: "defense",
                url: "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            base_stat: 65,
            effort: 1,
            stat: {
                name: "special-attack",
                url: "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            base_stat: 65,
            effort: 0,
            stat: {
                name: "special-defense",
                url: "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            base_stat: 45,
            effort: 0,
            stat: {
                name: "speed",
                url: "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ],
    types: [
        {
            slot: 1,
            type: {
                name: "grass",
                url: "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            slot: 2,
            type: {
                name: "poison",
                url: "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ],
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        back_female: null,
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        back_shiny_female: null,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        front_shiny_female: null
    },
}

storiesOf('PokemonInformation', module)
    .add('default', () => (
            <PokemonDetails pokemon={pokemon} />
        )
    )