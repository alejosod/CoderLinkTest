import React, {useContext, useState} from 'react';
import Proptypes from 'prop-types'
import { Content } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view';

import PokemonListItem from "../PokemonListItem/PokemonListItem";
import DetailsButtonComponent from "../DetailsButtonComponent/DetailsButonComponents";
import {PokemonsConText} from "../PokemonProvider/PokemonProvider";
import SlideInformation from "../SlideInformation/SlideInformation";
import SearchComponent from "../SearchComponent/SearchComponent";

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => layoutMeasurement.height + contentOffset.y >= contentSize.height - 20

const getPokemons = (searchString, list) => searchString ?
    list.filter(({name}) => name.toUpperCase().includes(searchString.toUpperCase())) :
    list

const renderItem = (data) => <PokemonListItem {...data.item} key={data.item.name}/>

const PokemonList = props => {
    const { pokemonList } = useContext(PokemonsConText)
    const { navigation } = props;
    const [search, setSearch ] = useState('');

    const data = getPokemons(search, pokemonList.results )

    return (
        <>
            <SearchComponent
                searchCallback={setSearch}
            />
            <Content onScroll={({nativeEvent}) => console.log(isCloseToBottom(nativeEvent))}>
                <SlideInformation />
                <SwipeListView
                    data={data}
                    renderItem={renderItem}
                    disableLeftSwipe
                    renderHiddenItem={({ item }) => ( <DetailsButtonComponent url={item.url} navigation={navigation} /> )}
                    leftOpenValue={60}
                    rightOpenValue={-60}
                    closeOnRowOpen
                    closeOnRowBeginSwipe
                    closeOnRowPress
                />
            </Content>
            </>
    )
}

PokemonList.propTypes = {
    navigation: Proptypes.object.isRequired
}

export default PokemonList