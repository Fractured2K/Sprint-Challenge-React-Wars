import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentChars: '',
      nextChars: '',
      prevChars: ''
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/${this.state.currentChars.substring(28)}`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextChars: data.next,
          prevChars: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextChars = () => {
    this.setState({
      currentChars: this.state.nextChars
    }, () => this.getCharacters(this.state.currentChars)
    )
  }

  prevChars = () => {
    this.setState({
      currentChars: this.state.prevChars
    }, () => this.getCharacters(this.state.currentChars)
    )
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          nextChars={this.nextChars}
          prevChars={this.prevChars}
          nextCharsState={this.state.nextChars}
          prevCharsState={this.state.prevChars}
          characters={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
