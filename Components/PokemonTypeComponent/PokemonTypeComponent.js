import React from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native'
import {Body, Card, CardItem, Text} from "native-base";
import styles from './styles'

import TypeComponent from "../TypeComponent";

const renderTypes = ({type}) => (
    <View >
        <TypeComponent type={type.name} />
    </View>
)

const PokemonTypeComponent = props => {
    const { types = [] } = props;

    return (
        <Card>
            <CardItem header>
                <Text>Pokemon Types</Text>
            </CardItem>
            <CardItem>
                <Body style={styles.body}>
                    {types.map(renderTypes)}
                </Body>
            </CardItem>

        </Card>
    )
}

PokemonTypeComponent.propTypes = {
    types: PropTypes.array.isRequired
}

renderTypes.propTypes = {
    type: PropTypes.object.isRequired
}
export default PokemonTypeComponent