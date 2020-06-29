import React from 'react';
import Proptypes from 'prop-types'
import {  View } from 'react-native'
import { Card, CardItem, Text, Body } from 'native-base';

import BarComponent from "../BarComponent";

const renderBar = ({ base_stat, stat: { name }}) => (
    <View style={{backgroundColor: '#000', width: 50, position: 'relative'}}>
        <BarComponent name={name}  value={base_stat} />
    </View>
    )

const PokemonStatsTab = props => {

    const { stats } = props;

    return (
        <Card>
            <CardItem header>
                <Text>Pokemon Stats</Text>
            </CardItem>
            <CardItem>
                <Body style={{ height: 150, display: 'flex', flexDirection: 'row'}}>
                    {stats.map(renderBar)}
                </Body>
            </CardItem>
        </Card>
    )

}

PokemonStatsTab.propTypes = {
    stats: Proptypes.array.isRequired
}

renderBar.propTypes = {
    'base_stat': Proptypes.number.isRequired,
    stat: Proptypes.object.isRequired
}

export default PokemonStatsTab