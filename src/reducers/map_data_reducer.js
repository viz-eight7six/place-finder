import { RECEIVE_GOOGLE_MAP } from '../actions/search_actions';
import merge from 'lodash/merge';

let defaultState = {
  google: null,
  service: null,
  map: null
};

const MapDataReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let google, service, map, newState, location;
  switch(action.type){
    case RECEIVE_GOOGLE_MAP:
      google = action.google;
      map = action.map;
      service = action.service;
      newState = merge({}, state);
      Object.assign(newState, {google: google,
                    map: map,
                    service: service,
                    location: location});
      return newState;
    default:
      return state;
  }
};

export default MapDataReducer;
