import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from "./styles";

const LabelInformation = props => {
    const { label, text } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{text}</Text>
        </View>
    )
}

LabelInformation.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default LabelInformation

