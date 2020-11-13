import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

// testing a new commit to branch
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  };

  searchYelp(term, location, sortBy) {
    // handles empty search cases
    if(term === '') {
      alert('Please input search term and try again!');
      return;
    }
    if(location === '') {
      alert('Please input search location and try again!')
      return;
    }
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      });
    });
  }
  
  render() {
    return ( 
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/> 
      </div>    
    );
  }
}

export default App;
