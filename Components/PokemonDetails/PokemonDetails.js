import React, {useEffect} from 'react';

import PokemonOverview from "../PokemonOverview";
import PokemonInformation from "../PokemonInformation/PokemonInformation";
import {useGetPokemonDetails} from "../../Hooks";

const PokemonDetails = props => {

    const { route: { params: { url }}} = props;

    const [ pokemonReponse, getPokemon ] = useGetPokemonDetails(url)

    useEffect(() => {getPokemon()}, [])

    const pokemon = pokemonReponse.data;

    return pokemonReponse.data && (
        <>
            <PokemonOverview
                name={pokemon.name}
                number={pokemon.id}
                imgUrl={pokemon.sprites.front_default}
            />
            <PokemonInformation pokemonInfo={pokemon} />
        </>
    )
}

export default PokemonDetails