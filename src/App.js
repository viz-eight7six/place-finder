import React, { Component } from 'react';
import './App.css';
import MapContainer from './map_container';
import SearchBar from './searchBar_container';
import List from './list_container';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      currentLocation: {
          lat: null,
          lng: null
      }
    };
    this.searchPlace = this.searchPlace.bind(this);
  }

  componentWillMount() {
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            this.setState({
                currentLocation: {
                    lat: coords.latitude,
                    lng: coords.longitude
                }
            });
        });
    }
  }

  searchPlace(term){
    this.setState({searchTerm: term});
  }

  render() {
    let list;

    if (this.state.searchTerm){
      list = <List searchTerm={this.state.searchTerm}/>;
    }
    // <List searchTerm={this.state.searchTerm} style={{display: this.state.searchTerm === '' ? "none" : "flex"}}/>

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <i onClick={() => window.location.reload()} style={{color: '#EB111A'}} className="fa fa-map-marker" aria-hidden="true"></i>
            <p style={{color: '#108F22'}}>Place</p><p style={{color: '#30BCED'}}>Finder</p>
          </h1>
        </header>
        <div className="search-bar">
          <SearchBar searchPlace={this.searchPlace}
            currentLocation={this.state.currentLocation}
            />
        </div>
        <div className='mapListContainer'>
          <div className='list' style={{width: this.state.searchTerm === '' ? "0%" : "15%",
                                        }}>
            {list}
          </div>
          <div className="map">
            <MapContainer style={{height: "75%"}}
              currentLocation={this.state.currentLocation}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
