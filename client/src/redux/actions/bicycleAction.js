import axios from 'axios';

export const getAllBicycles = () => async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });
    try {
        const response = await axios.get('/api/bicycles/getallbicycles');
        dispatch({ type: 'GET_ALL_BICYCLES', payload: response.data });
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false });
    }
}