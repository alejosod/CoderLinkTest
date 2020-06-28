import React from 'react';
import { View } from 'react-native'
import { Button, Icon } from "native-base";
import Proptypes from 'prop-types'

import { SwipeListView } from 'react-native-swipe-list-view';

import PokemonListItem from "../PokemonListItem/PokemonListItem";
import DetailsButtonComponent from "../DetailsButtonComponent/DetailsButonComponents";


const renderItem = (data) => <PokemonListItem {...data} key={data.name}/>

const PokemonList = props => {
    const { pokemonList, navigation } = props;

    return (
        <SwipeListView
            data={pokemonList}
            renderItem={renderItem}
            disableLeftSwipe
            renderHiddenItem={({url}) => ( <DetailsButtonComponent url={url} navigation={navigation}/> )}
            leftOpenValue={60}
            rightOpenValue={-60}
        />
    )
}

PokemonList.propTypes = {
    pokemonList: Proptypes.array.isRequired,
    navigation: Proptypes.object.isRequired
}

export default PokemonList