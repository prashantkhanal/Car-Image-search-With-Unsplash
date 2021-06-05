import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };
  handleInput = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div onSubmit={this.handleInput} className="ui segment">
        <form className="ui form">
          <div className="field-dark">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
