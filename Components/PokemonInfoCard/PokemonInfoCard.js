import React  from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text } from 'native-base';

import LabelInformation from "../Labelnformation";
import PokemonAbilities from "../pokemonAbiilitiies";

const PokemonInfoCard = props => {
    const { height, weight, abilities } = props;

    return (
        <Card>
            <CardItem header bordered>
                <Text>General Information</Text>
            </CardItem>
            <CardItem bordered>
                <LabelInformation label={'Weight'} text={weight}/>
                <LabelInformation label={'Height'} text={height}/>
            </CardItem>
            <CardItem header bordered>
                <Text>Pokemon abilities</Text>
            </CardItem>
            <CardItem bordered>
                <PokemonAbilities abilities={abilities} />
            </CardItem>
        </Card>
    )
}

PokemonInfoCard.propTypes = {
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    abilities: PropTypes.array.isRequired
}

export default PokemonInfoCard;