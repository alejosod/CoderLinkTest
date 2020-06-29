import React from 'react';
import Proptypes from 'prop-types'
import { Card, CardItem, Text, Body, ListItem, List } from 'native-base';

import BarComponent from "../BarComponent";

const renderBar = ({ base_stat, stat: { name }}) => (
    <ListItem >
        <BarComponent name={name}  value={base_stat} />
    </ListItem>
    )

const PokemonStatsTab = props => {

    const { stats } = props;

    return (
        <Card>
            <CardItem header>
                <Text>Pokemon Stats</Text>
            </CardItem>
            <CardItem>
                <Body >
                    <List>
                        {stats.map(renderBar)}
                    </List>
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