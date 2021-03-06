
import React, { Component } from 'react';
import MovieElement from './MovieElement/movieElement';


// import './movie-list.scss';


export default class MovieList extends Component {

    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                {this.props.movies.map((m, index) => (
                <MovieElement key={ m.title + index} movie={m} updateSelectedMovie ={ () =>{this.props.updateSelectedMovie(index) } } />
           
                ))}
            </div>
        );
    }
}



