import MapContainer from './map';
import { connect } from 'react-redux';
import { receiveGoogle } from './actions/search_actions';

const mapStateToProps = state => ({
  place_state: state.place_state,
  map_data: state.map_data
});

const mapDispatchToProps = dispatch => ({
  receiveGoogle: (google, service, map, location) => dispatch(receiveGoogle(google, service, map, location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
