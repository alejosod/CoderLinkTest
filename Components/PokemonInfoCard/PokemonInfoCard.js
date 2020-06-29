import React  from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text } from 'native-base';

import LabelInformation from "../Labelnformation";

const PokemonInfoCard = props => {
    const { height, weight } = props;

    return (
        <Card>
            <CardItem header bordered>
                <Text>General Information</Text>
            </CardItem>
            <CardItem bordered>
                <LabelInformation label={'Weight'} text={weight}/>
                <LabelInformation label={'Height'} text={height}/>
            </CardItem>
        </Card>
    )
}

PokemonInfoCard.propTypes = {
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired
}

export default PokemonInfoCard;