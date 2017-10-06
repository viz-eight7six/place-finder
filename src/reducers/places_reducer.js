import { RECEIVE_LIST } from '../actions/search_actions';
import merge from 'lodash/merge';

let defaultState = {
  places: []
};

const PlacesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newList, newState;
  switch(action.type){
    case RECEIVE_LIST:
      newList = action.list;
      newState = merge({}, state);
      Object.assign(newState, {places: newList});
      return newState;
    default:
      return state;
  }
};

export default PlacesReducer;
