import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

import {createPokemonNumber} from "../../Helpers";
import styles from './styles'

const PokemonOverview  = props => {
    const { name, number, imgUrl } = props;

    return (
        <Card>
            <CardItem>
                <View style={styles.textContainer}>
                    <Text style={styles.pokemonName} >{name}</Text>
                    <Text style={styles.pokemonNumber}>{createPokemonNumber(number)}</Text>
                </View>
            </CardItem>
            <CardItem cardBody>
                <Image
                    source={{uri: imgUrl}}
                    style={{height: 200, width: null, flex: 1}}
                />
            </CardItem>
        </Card>
    )
}

PokemonOverview.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired
}

export default PokemonOverview