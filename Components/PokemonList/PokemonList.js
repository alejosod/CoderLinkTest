import React from 'react';
import Proptypes from 'prop-types'

import { SwipeListView } from 'react-native-swipe-list-view';

import PokemonListItem from "../PokemonListItem/PokemonListItem";
import DetailsButtonComponent from "../DetailsButtonComponent/DetailsButonComponents";

const renderItem = (data) => <PokemonListItem {...data.item} key={data.item.name}/>

const PokemonList = props => {
    const { pokemonList, navigation } = props;

    return (
        <SwipeListView
            data={pokemonList}
            renderItem={renderItem}
            disableLeftSwipe
            renderHiddenItem={({ item }) => ( <DetailsButtonComponent url={item.url} navigation={navigation} /> )}
            leftOpenValue={60}
            rightOpenValue={-60}
            closeOnRowOpen
            closeOnRowBeginSwipe
            closeOnRowPress
        />
    )
}

PokemonList.propTypes = {
    pokemonList: Proptypes.array.isRequired,
    navigation: Proptypes.object.isRequired
}

export default PokemonList