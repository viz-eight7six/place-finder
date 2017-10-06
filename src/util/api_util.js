var Promise = require('es6-promise').Promise;

export const fetchList = (google, searchTerm, location, service) => new Promise((resolve, reject) => {
  let request = {
    location: location,
    radius: '500',
    query: searchTerm
  };
  let response = (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      resolve(results);
    }
    else{
      reject("error");
    }
  };
  service.textSearch(request, response);
});
