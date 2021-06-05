import React, { Component } from 'react';
import axios from './Api/unplash';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

/**
 * @author
 * @function App
 **/

class App extends Component {
  state = { image: [] };
  onSearchSubmit = async (term) => {
    const res = await axios.get(`search/photos`, {
      params: {
        query: term,
      },
    });
    this.setState({ image: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.image} />
      </div>
    );
  }
}

export default App;
