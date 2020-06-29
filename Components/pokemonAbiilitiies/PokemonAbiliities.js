import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base'

const PokemonAbilities = props => {
    const { abilities } = props;

    return (
        <List>
            {abilities.map(({ability}) => (
                <ListItem noIndent key={ability.name}>
                    <Text>{ability.name}</Text>
                </ListItem>
            ))}
        </List>
    )
}

PokemonAbilities.propTypes = {
    abilities: PropTypes.array.isRequired
}

export default PokemonAbilities