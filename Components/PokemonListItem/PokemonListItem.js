import React from 'react';
import Proptypes from 'prop-types'
import { ListItem, Left , Text, Right } from "native-base";

import styles from './styles';

const PokemonListItem = props => {
    const { name, url, navigation } = props;

    return (
        <ListItem style={styles.listItem}>
            <Left>
                <Text>{name}</Text>
            </Left>
            <Right>
                <Text
                    onPress={() => navigation.navigate('PokemonDetails',  { url})}
                    note
                    style={styles.detailsText}>See Details</Text>
            </Right>
        </ListItem>
    )
};

PokemonListItem.propTypes = {
    navigation: Proptypes.object.isRequired,
    name: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired
}

export default PokemonListItem