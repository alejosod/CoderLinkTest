import React from 'react';
import { Tabs, Tab, Text, Header, Container }  from 'native-base';
import { InfoTab, TypeTab, StatsTab } from './Headers'

const PokemonInformation = props => {

    const { ppokemonInfo } = props;

    return (
        <Container>
            <Header hasTabs/>
            <Tabs>
                <Tab heading={InfoTab}>
                    <Text>Info</Text>
                </Tab>
                <Tab heading={StatsTab}>
                    <Text>Stats</Text>
                </Tab>
                <Tab heading={TypeTab}>
                    <Text>Type</Text>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default PokemonInformation;