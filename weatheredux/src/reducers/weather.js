import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [...state, action.payload.data]; // same as state.concat([data])
  default:
    return state;
  }
}
