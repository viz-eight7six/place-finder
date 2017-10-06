import List from './list';
import { connect } from 'react-redux';
import { receiveGoogle } from './actions/search_actions';

const mapStateToProps = state => ({
  places: state.place_state.places,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
