export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// const mongoDB=process.env.DATABASE_URL

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST })
        fetch('http://localhost:3000/api/getAll')
            .then((Response) => Response.json())
            .then(console.log('hello'))
            .then((data) => dispatch({ type: FETCH_DATA_SUCCESS, payload: data }))
            .catch((err) => dispatch({ type: FETCH_DATA_FAILURE, payload: err }))
    };
};