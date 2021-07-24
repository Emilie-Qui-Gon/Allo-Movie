// == Import npm
import React, { Component } from 'react';
import Header from '../Header/header';
import MovieDetails from '../Movie-details/movieDetails';
import MovieList from '../Movie-list/movieList';
import Loading from '../Utils/loading';

import dataMovies from '../data';

// == Import

import './app.scss';

// == Composant
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }
    setTimeout( () => {
this.setState({
  movies: dataMovies,
  loaded: true
})
    }, 1000);
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    }) 
  }

  render() {

    return (
      <div className="app d-flex flex-column">
        <Header />
        { this.state.loaded ? (     
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList movies= { this.state.movies} updateSelectedMovie= { this.updateSelectedMovie } />
          <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
        </div>) : (
          <Loading />
        )}
   
      </div>
    );
  }
};

// == Export
export default App;
