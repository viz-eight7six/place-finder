import { combineReducers } from 'redux';
import PlacesReducer from './places_reducer';
import MapDataReducer from './map_data_reducer';

const RootReducer = combineReducers({
  place_state: PlacesReducer,
  map_data: MapDataReducer
});

export default RootReducer;
