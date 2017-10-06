import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let google = this.props.map_data.google;
    let location = this.props.currentLocation;
    let service = this.props.map_data.service;
    this.props.searchPlace(this.state.searchTerm);
    this.props.getList(google, this.state.searchTerm, location, service);
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.target.value});
    };
  }

  render(){
    return (
      <div id='form'>
        <input id="search" type='text' placeholder='Search for a place'
          value={this.state.seachTerm}
          onChange={this.update('searchTerm')}
        >
        </input>
        <input type="submit"
          id="button"
          value="Search"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }

}

export default SearchBar;
