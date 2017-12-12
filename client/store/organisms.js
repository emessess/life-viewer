import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_ORGANISMS = 'GET_ORGANISMS';

/**
 * INITIAL STATE
 */

/**
 * ACTION CREATORS
 */
const getOrganisms = organisms => ({type: GET_ORGANISMS, organisms});

/**
 * THUNK CREATORS
 */
export const fetchOrganisms = () =>
  dispatch =>
    axios.get('/organisms/')
      .then(res =>
        dispatch(getOrganisms(res.data)))
      .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ORGANISMS:
      return action.organisms;
    default:
      return state;
  }
}
