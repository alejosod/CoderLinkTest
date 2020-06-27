import {useReducer} from "react";
import axios from 'axios'
import {fetchReducer, fetchReducerInitialState, setError, setLoading, setSuccess} from "../Helpers";

/**
 * Custom hook to get the list of pokemons and function to call the next and prev cursors
 * @param limit
 * @param offset
 * @returns {[S, fetchList, getNext, getPrevious]}
 */
export default (limit, offset) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const [ state, dispatch ] = useReducer(fetchReducer, fetchReducerInitialState);

    const fetchList = async (nextOrPrev) => {

        dispatch(setLoading());
        try {
            const { data } = await axios.get(nextOrPrev || url);
            dispatch(setSuccess(data))
        } catch (e) {
            const { message } = e;
            dispatch(setError(message))
        }
    }

    return [ state, fetchList ];

    
}