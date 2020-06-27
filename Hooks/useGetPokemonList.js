import {useReducer, useState} from "react";
import axios from 'axios'
import {fetchReducer, fetchReducerInitialState, setError, setLoading, setSuccess} from "../Helpers";

export default (limit, offset) => {

    const [ currentUrl, setUrl ] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const [ state, dispatch ] = useReducer(fetchReducer, fetchReducerInitialState);

    const fetchList = async () => {

        dispatch(setLoading());

        try {
            const { data } = await axios.get(currentUrl);
            dispatch(setSuccess(data))
        } catch (e) {
            const { message } = e;
            dispatch(setError(message))
        }
    }

    const getNext = () => {
        const { data }  = state;

        if(data){
            const { next } = data;
            setUrl(next);
            fetchList();
        }
    }

    const getPrevious = () => {
        const { data }  = state;

        if(data){
            const { previous } = data;
            setUrl(previous);
            fetchList();
        }
    }

    return [ state, fetchList, getNext, getPrevious ];

    
}