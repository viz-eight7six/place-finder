import SearchBar from './searchBar';
import { connect } from 'react-redux';
import { getList } from './actions/search_actions';

const mapStateToProps = state => ({
  map_data: state.map_data
});

const mapDispatchToProps = dispatch => ({
  getList: (google, searchTerm, location, service) => dispatch(getList(google, searchTerm, location, service))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
