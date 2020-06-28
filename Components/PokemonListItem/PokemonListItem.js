import React from 'react';
import Proptypes from 'prop-types'
import { ListItem, Left , Text } from "native-base";

import styles from './styles';

const PokemonListItem = props => {
    const { name } = props;

    return (
        <ListItem noIndent style={styles.listItem}>
            <Left>
                <Text>{name}</Text>
            </Left>
        </ListItem>
    )
};

PokemonListItem.propTypes = {
    name: Proptypes.string.isRequired,
}

export default PokemonListItem