import axios from 'axios';

export default () => async (dispatch, getState) => {
    const res = await axios.get('/api/current_user');

    dispatch({type: "FETCH_USER", payload: res.data});
}