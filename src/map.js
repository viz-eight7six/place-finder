import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

export class MapContainer extends React.Component {
//4155477800
  constructor(props) {
      super(props);
      this.state = {
        currentLocation: {
          lat: null,
          lng: null
        },
        service: null,
        google: null,
        pins: [],
        selectedPlace: {
          title:null,
          place:{
            formatted_address: null
          }
        },
        activeMarker: null,
        showingInfoWindow: false
      };
      this.setProps = this.setProps.bind(this);
      this.onMarkerClick = this.onMarkerClick.bind(this);
    }

  // componentWillMount() {
  //   if (navigator && navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((pos) => {
  //           const coords = pos.coords;
  //           this.setState({
  //               currentLocation: {
  //                   lat: coords.latitude,
  //                   lng: coords.longitude
  //               }
  //           });
  //       });
  //   }
  // }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.focus !== this.props.focus) {
      // this.state.pins[this.props.focus].props.onClick();
      //   selectedPlace: this.state.pins[this.props.focus].props,
      //   activeMarker: this.state.pins[this.props.focus].props.type,
      //   showingInfoWindow: true
      // });
    }

    if(prevProps.place_state !== this.props.place_state){
      let pins = this.props.place_state.places.map((place, i) => (
        <Marker
          key={i}
          title={place.name}
          icon={null}
          position={place.geometry.location}
          label={place.name[0]}
          onClick={(props, marker, e) => this.onMarkerClick(i, props, marker, e)}
          place={place}
        />
      ));
      this.setState({pins: pins});
    }

  }

  setProps(mapProps, map){
    let location = this.state.currentLocation;
    let {google} = mapProps;
    let service = new google.maps.places.PlacesService(map);
    this.props.receiveGoogle(google, service, map, location);
  }

  onMarkerClick(i, props, marker, e) {
    this.props.focusItem(i);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {

    let userLocPin;

    if (this.props.currentLocation.lat) {
      userLocPin = <Marker
                    title={'Current Location'}
                    position={this.props.currentLocation}
                    onClick={this.onMarkerClick}
                    icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}/>;
    }

    // let pins;
    // if(this.props.place_state.places){
    //   pins = this.props.place_state.places.map((place, i) => (
    //     <Marker
    //       key={i}
    //       title={place.name}
    //       position={place.geometry.location}
    //       label={place.name[0]}
    //       onClick={this.onMarkerClick}
    //       place={place}
    //     />
    //
    //   ));
    // }
    let  infoWindow = <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div>
                      <p><strong>{this.state.selectedPlace.title}</strong><br/>
                      {this.state.selectedPlace.place.formatted_address}<br/>
                      </p>
                    </div>
                </InfoWindow>;
      return (
        <Map id='map' google={this.props.google} zoom={14}
        style={{
              width: '75%',
              height: '75%'
            }}
        onReady={this.setProps}
        center={this.props.currentLocation}

        >
          {userLocPin}
          {infoWindow}
          {this.state.pins}

        </Map>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCMX6JoFSc5-Gaaonw2ZdBUU50oL34R8Us")
})(MapContainer);
