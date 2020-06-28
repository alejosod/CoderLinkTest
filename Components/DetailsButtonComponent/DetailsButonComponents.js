import React from 'react';
import PropTypes from 'prop-types'
import {View, TouchableHighlight} from "react-native";
import {Icon } from "native-base";
import styles from './styles'

const DetailsButtonComponent = props => {

    const { url, navigation } = props;

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate(url)}
        >
            <View style={styles.container}>
                <Icon
                    style={styles.icon}
                    active
                    name="information-circle"
                />
            </View>
        </TouchableHighlight>
    )
}

DetailsButtonComponent.propTypes = {
    url: PropTypes.string.isRequired,
    navigation: PropTypes.any.isRequired
}

export default DetailsButtonComponent