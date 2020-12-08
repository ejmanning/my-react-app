import React from 'react';

const movieDetailStyles = {
    backgroundColor: 'cornflowerBlue',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
}

const MovieDetails = (props) => {
  const {currentMovie} = props;
  return (
        <div style = {movieDetailStyles}>
          <p style = {{fontWeight: 'bold'}}>{currentMovie.title}</p>
          <p>Rating: {currentMovie.rating}/10</p>
          <p>Director: {currentMovie.director}</p>
          <p>Released: {currentMovie.releaseYear}</p>
          <p>Description: {currentMovie.description}</p>
          <p>Categories: {currentMovie.categories.join(', ')}</p>
          <img src = {currentMovie.posterUrl} alt = {currentMovie.title} height = '250'/>

        </div>
  )

}

export default MovieDetails;
