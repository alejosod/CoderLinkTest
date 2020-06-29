import React from 'react';
import { View } from 'react-native'
import { Text } from 'native-base'
import PropTypes from 'prop-types'

import styles from './styles'

const TypeComponent = props => {
    const { type } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{type}</Text>
        </View>
    )
}

TypeComponent.propTypes = {
    type: PropTypes.string.isRequired
}

export default TypeComponent