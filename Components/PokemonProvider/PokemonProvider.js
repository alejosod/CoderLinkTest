import React from 'react';
import PropTypes from 'prop-types'

const PokemonsConText = React.createContext({
    pokemons: []
})

const PokemonsProvider = props => {

    const { pokemonList, children } = props;

    return (
        <PokemonsConText.Provider value={{pokemonList}}>
            {children}
        </PokemonsConText.Provider>
    )
}

PokemonsProvider.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    children: PropTypes.any.isRequired
}

export default PokemonsProvider
export { PokemonsConText }