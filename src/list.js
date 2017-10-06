import React from 'react';

class List extends React.Component {

  render(){
    let message = "";
    let placeList;
    if(this.props.places){
      message =  `Results: ${this.props.searchTerm}`;
      placeList = this.props.places.map((place, i) => (
        <div className="list-item" key={i}>
          <div>
            <p> <strong>{place.name}</strong><br/><br/>
                {place.formatted_address}<br/>
                {place.rating ? place.rating + '★' : 'No Rating'}</p>
          </div>
        </div>
      ));
    }
    return (

      <div className='list-component' style={{color: "#FFF"}}>
        <h3>{message}</h3>
        {placeList}
      </div>
    );
  }

}

export default List;
