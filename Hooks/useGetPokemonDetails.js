import {useReducer} from "react";
import {fetchReducer, fetchReducerInitialState, setError, setLoading, setSuccess} from "../Helpers";
import axios from "axios";

/**
 * Hook that fetch the information of an speciific pokemon
 * @param url { string } - url for the pokemon api
 * @return {[S, fetchPokemon]}
 */
export default (url) => {
    const [ state, dispatch ] = useReducer(fetchReducer, fetchReducerInitialState);

    const fetchPokemon = async () => {

        dispatch(setLoading());
        try {
            const { data } = await axios.get(url);
            dispatch(setSuccess(data))
        } catch (e) {
            const { message } = e;
            dispatch(setError(message))
        }
    }

    return [ state, fetchPokemon ]
}
