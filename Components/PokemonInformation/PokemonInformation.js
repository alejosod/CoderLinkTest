import React from 'react';
import PropTypes from 'prop-types'
import { Tabs, Tab, Header, Container }  from 'native-base';
import { InfoTab, TypeTab, StatsTab } from './Headers'
import PokemonStatsTab from "../PokemonStatsTab/PokemonStatsTab";
import PokemonTypeComponent from "../PokemonTypeComponent";
import PokemonInfoCard from "../PokemonInfoCard/PokemonInfoCard";

const PokemonInformation = props => {

    const { pokemonInfo } = props;

    return (
        <Container>
            <Header hasTabs/>
            <Tabs>
                <Tab heading={InfoTab}>
                    <PokemonInfoCard {...pokemonInfo} />
                </Tab>
                <Tab heading={StatsTab}>
                    <PokemonStatsTab {...pokemonInfo} />
                </Tab>
                <Tab heading={TypeTab}>
                    <PokemonTypeComponent {...pokemonInfo} />
                </Tab>
            </Tabs>
        </Container>
    )
}

PokemonInformation.propTypes = {
    pokemonInfo: PropTypes.object.isRequired
}

export default PokemonInformation;