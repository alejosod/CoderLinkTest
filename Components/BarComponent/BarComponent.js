import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './styles'

const getBarValue = (value) => value * 2

const BarComponent = props => {
    const { name, value } = props;

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.backgroundBar} />
                <View style={{...styles.barValue, width: getBarValue(value)}} />
            </View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

BarComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default BarComponent