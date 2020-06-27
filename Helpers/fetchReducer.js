const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';
const SET_SUCCESS = 'SET_DATA';

export const fetchReducerInitialState = {
    loading: false,
    error: false,
    data: false
}

export const setLoading = () => ({ type: SET_LOADING });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
export const setSuccess = (data) => ({ type: SET_SUCCESS, payload: data });

export default (state, action) => {
    const { type } = action;

    switch (type) {
        case SET_LOADING:
            return {
                loading: true,
                error: false,
                data: false
            }
        case SET_ERROR: {
            const { payload } = action;
            return {
                loading: false,
                error: payload,
                data: false,
            }
        }
        case SET_SUCCESS: {
            const { payload } = action;
            return {
                loading: false,
                error: false,
                data: payload,
            }
        }
        default:
            throw new Error('Error at fetch Reducer: No Action type specified');
    }
}