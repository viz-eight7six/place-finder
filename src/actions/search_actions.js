import * as APIUtil from '../util/api_util';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_GOOGLE_MAP = 'RECEIVE_GOOGLE_MAP';


export const getList = (google, searchTerm, location, service) => dispatch => {
  if(searchTerm !== ""){
    APIUtil.fetchList(google, searchTerm, location, service).then( list => {
      return dispatch(receiveList(list));
      });
  }
  else{
    let list = [];
    return dispatch(receiveList(list));
  }
};

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveGoogle = (google, service, map) => ({
  type: RECEIVE_GOOGLE_MAP,
  google,
  service,
  map
});
