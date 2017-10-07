import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.focus !== this.props.focus) {
      let item = document.getElementById(this.props.focus);
      item.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }
  }

  handleClick(i){
    // this.props.focusItem(i);
  }

  render(){
    let message = "";
    let placeList;
    if(this.props.places){
      message =  `Results: ${this.props.searchTerm}`;
      placeList = this.props.places.map((place, i) => (
        <div className="list-item" id={i} key={i}
          onClick={() => this.handleClick(i)}>
          <div>
            <p> <strong>{place.name}</strong><br/><br/>
                {place.formatted_address}<br/>
                {place.rating ? place.rating + '★' : 'No Rating'}</p>
            <a target={"_blank"} href={`https://www.google.com/maps/dir/?api=1&origin&destination=${place.name}&destination_place_id=${place.place_id}`}>
              Directions</a>
          </div>
        </div>
      ));
    }
    return (

      <div id="scrollList" className='list-component' style={{color: "#FFF"}}>
        <h3>{message}</h3>
        {placeList}
      </div>
    );
  }

}

export default List;
